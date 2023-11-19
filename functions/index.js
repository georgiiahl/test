const cors = require('cors')({ origin: true });
const axios = require('axios');

exports.helloWorld = (req, res) => {
  cors(req, res, async () => {
    if (!req.body.url || typeof req.body.url !== 'string') {
      return res.status(400).send('URL is required and must be a string.');
    }

    if (!req.body.carbonIntensity || typeof req.body.carbonIntensity !== 'number') {
      return res.status(400).send('Carbon intensity is required and must be a number.');
    }

    const userName = req.body.data || 'Guest';
    const greetingMessage = `Hello, ${userName}! Welcome to our service.`;

    try {
      const { totalSize, scores } = await getPageSizeAndScores(req.body.url);
      const emissions = calculateEmissions(totalSize, req.body.carbonIntensity);

      const response = {
        greeting: greetingMessage,
        apiResponse: {
          size: totalSize,
          emissions: emissions,
          performanceScore: 85, // Assuming this is a static value or calculated elsewhere
          stylesDataPuppeteer: {
            sustainabilityScore: 90, // Assuming these are static values or calculated elsewhere
            fonts: {
              imported: 2,
              embedded: 1,
            },
            colors: {
              sustainable: 5,
              nonSustainable: 2,
            },
          },
          isGreenHosted: true, // Assuming this is a static value or determined elsewhere
          individualAuditScores: scores
        }
      };

      res.status(200).send(response);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error in processing request');
    }
  });
};

async function getPageSizeAndScores(url) {
  const apiKey = 'AIzaSyA10XUF1H2MFZAQa07i9yqXSD9chxB5Djw';
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${apiKey}`;
  let totalSize = 0;
  let scores = {};

  try {
    const response = await axios.get(apiUrl);
    const audits = response.data.lighthouseResult.audits;

    const resources = audits['network-requests'].details.items;
    resources.forEach(resource => {
      totalSize += resource.transferSize;
    });

    scores = {
      lcpScore: audits['largest-contentful-paint'].score,
      clsScore: audits['cumulative-layout-shift'].score,
      tbtScore: audits['total-blocking-time'].score,
      srtScore: audits['server-response-time'].score,
      optimizedImagesScore: audits['uses-optimized-images'].score,
      unusedJavascriptScore: audits['unused-javascript'].score,
    };

    return { totalSize, scores };
  } catch (error) {
    console.error('Error fetching data from PageSpeed Insights API:', error);
    throw error;
  }
}

function calculateEmissions(pageSize, carbonIntensity) {
  const pageSizeInGB = pageSize / (1024 ** 3);
  const energyConsumed = pageSizeInGB * 0.75 * 0.81;
  const carbonEmissions = energyConsumed * carbonIntensity;
  return carbonEmissions.toFixed(2);
}
