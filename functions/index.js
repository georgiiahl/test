const cors = require("cors")({ origin: true });

exports.helloWorld = (req, res) => {
  cors(req, res, () => {
    const userName = req.body.data;
    const nameToGreet = userName;
    const greetingMessage = `Hello, ${nameToGreet}! Welcome to our service.`;

    const mockApiResponse = {
      size: 1024,
      emissions: 0.25,
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
    };

    res
      .status(200)
      .send({ greeting: greetingMessage, apiResponse: mockApiResponse });
  });
};
