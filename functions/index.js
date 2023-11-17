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
    const nameToGreet = userName;
    const greetingMessage = `Hello, ${nameToGreet}! Welcome to our service.`;

    try {
      const pageSize = await getPageSize(req.body.url);
      const emissions = calculateEmissions(pageSize, req.body.carbonIntensity);

      const response = {
        greeting: greetingMessage,
        apiResponse: {
          size: pageSize,
          emissions: emissions,
          performanceScore: 85,
          stylesDataPuppeteer: {
            sustainabilityScore: 90,
            fonts: {
              imported: 2,
              embedded: 1,
            },
            colors: {
              sustainable: 5,
              nonSustainable: 2,
            },
          },
          isGreenHosted: true,
          individualAuditScores: {
            lcpScore: 0.95,
            clsScore: 0.9,
            tbtScore: 0.85,
            srtScore: 0.8,
            optimizedImagesScore: 0.75,
            unusedJavascriptScore: 0.7,
          },
        }
      };

      res.status(200).send(response);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error in processing request');
    }
  });
};

async function getPageSize(url) {
  const apiKey = 'AIzaSyA10XUF1H2MFZAQa07i9yqXSD9chxB5Djw';
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${apiKey}`;
  let totalSize = 0;

  try {
    const response = await axios.get(apiUrl);
    const resources = response.data.lighthouseResult.audits['network-requests'].details.items;

    resources.forEach(resource => {
      totalSize += resource.transferSize;
    });

    return totalSize;
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
