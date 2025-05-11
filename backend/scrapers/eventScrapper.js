const puppeteer = require('puppeteer');
const Event = require('../models/eventModel');

const scrapeEvents = async () => {
  try {
    console.log('Starting scraper...');
    const url = 'https://www.eventbrite.com.au/d/australia--sydney/events/';
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    // Set a real user agent
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
    );

    console.log('Navigating to', url);
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });

    console.log('Page loaded, extracting events...');
    await page.screenshot({
      path: 'screenshot.png',
    });

    // Wait for the events to load
    await page.waitForSelector('.discover-vertical-event-card', {
      timeout: 10000,
    });

    const events = await page.evaluate(() => {
      // Using the new selectors based on current Eventbrite HTML
      const eventCards = Array.from(
        document.querySelectorAll('.discover-vertical-event-card')
      );

      return eventCards.map((card) => {
        // Get title
        const titleElement = card.querySelector('h3[class*="Typography_root"]');
        const title = titleElement?.innerText || '';

        // Get link
        const linkElement = card.querySelector('a.event-card-link');
        const link = linkElement?.href || '';

        // Get date
        const dateElement = card.querySelector(
          'section.event-card-details p.Typography_body-md-bold__487rx'
        );
        const date = dateElement?.innerText || '';

        // Get image
        const imageElement = card.querySelector('img.event-card-image');
        const image = imageElement?.src || '';

        // Get location
        const locationElement = card.querySelector(
          'p[class*="Typography_body-md"][class*="event-card__clamp-line--one"]'
        );
        const location = locationElement?.innerText || 'Sydney, Australia';

        // Get price
        const priceElement = card.querySelector(
          '.DiscoverVerticalEventCard-module__priceWrapper___usWo6 p'
        );
        const price = priceElement?.innerText || 'Free';

        return {
          title,
          link,
          data: date, // keeping your original field name
          image,
          location,
          price,
          source: 'Eventbrite',
        };
      });
    });

    console.log(`Found ${events.length} events`);
    console.log(
      'Raw events data:',
      JSON.stringify(events).substring(0, 300) + '...'
    );

    for (const event of events) {
      console.log(`Saving event: ${event.title}`);
      if (event.title && event.link) {
        await Event.updateOne({ link: event.link }, event, {
          upsert: true,
        });
      } else {
        console.log('Skipping event with missing title or link');
      }
    }

    await browser.close();
    console.log('Scraping completed successfully');
  } catch (error) {
    console.error('Error scraping events:', error);
  }
};

module.exports = scrapeEvents;
