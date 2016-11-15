DescriptiveStatisticsTest = TestCase("DescriptiveStatisticsTest");

DescriptiveStatisticsTest.prototype.setUp = function () {
    this.stats = new DescriptiveStatistics();
    this.stats.addValue(5);
    this.stats.addValue(20);
    this.stats.addValue(40);
    this.stats.addValue(80);
    this.stats.addValue(10);

    this.stats2 = new DescriptiveStatistics();
    this.stats2.addValue(1234);
    this.stats2.addValue(324);
    this.stats2.addValue(532);
    this.stats2.addValue(8643);
    this.stats2.addValue(1450);
};

DescriptiveStatisticsTest.prototype.testGetMean = function () {
    assertEquals(31, this.stats.getMean());
    assertEquals(2436.6, this.stats2.getMean());
};
DescriptiveStatisticsTest.prototype.testGetStandardDeviation = function () {
    assertEquals(30.495901363953813, this.stats.getStandardDeviation());
    assertEquals(3501.0572403204146, this.stats2.getStandardDeviation());
};
DescriptiveStatisticsTest.prototype.testGetSkewness = function () {
    assertEquals(1.325314709813405, this.stats.getSkewness());
    assertEquals(2.1363489491807903, this.stats2.getSkewness());
};
DescriptiveStatisticsTest.prototype.testGetKurtosis = function () {
    assertEquals(1.303763440860216, this.stats.getKurtosis());
    assertEquals(4.644949276828559, this.stats2.getKurtosis());
};
DescriptiveStatisticsTest.prototype.testGetMax = function () {
    assertEquals(80, this.stats.getMax());
    assertEquals(8643, this.stats2.getMax());
};
DescriptiveStatisticsTest.prototype.testGetMin = function () {
    assertEquals(5, this.stats.getMin());
    assertEquals(324, this.stats2.getMin());
};
DescriptiveStatisticsTest.prototype.testGetN = function () {
    assertEquals(5, this.stats.getN());
    assertEquals(5, this.stats2.getN());
};
DescriptiveStatisticsTest.prototype.testGetSum = function () {
    assertEquals(155, this.stats.getSum());
    assertEquals(12183, this.stats2.getSum());
};
