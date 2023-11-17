export interface ApiResponse {
  size: number;
  emissions: any;
  performanceScore: any;
  stylesDataPuppeteer: {
    sustainabilityScore: number;
    fonts: {
      imported: number;
      embedded: number;
    };
    colors: {
      sustainable: number;
      nonSustainable: number;
    };
  };
  isGreenHosted: boolean;
  individualAuditScores: {
    lcpScore: number;
    clsScore: number;
    tbtScore: number;
    srtScore: number;
    optimizedImagesScore: number;
    unusedJavascriptScore: number;
  };
}
