FrequencyTest = TestCase("FrequencyTest");

FrequencyTest.prototype.setUp = function () {
    this.freq = new Frequency();
    this.freq.addValue(1);
    this.freq.addValue(2);
    this.freq.addValue(2);
    this.freq.addValue(3);
    this.freq.addValue(3);
    this.freq.addValue(3);
    this.freq.addValue(2);
    this.freq.addValue(2);
    this.freq.addValue(1);
};

FrequencyTest.prototype.testGetCount = function () {
    assertEquals(3, this.freq.getCount(3));
};
FrequencyTest.prototype.testGetUniqueCount = function () {
    assertEquals(3, this.freq.getUniqueCount());
};
FrequencyTest.prototype.testGetSumFreq = function () {
    assertEquals(9, this.freq.getSumFreq());
};
FrequencyTest.prototype.testGetPct = function () {
    assertEquals(0.3333333333333333, this.freq.getPct(3));
};
FrequencyTest.prototype.testGetMode = function () {
    assertEquals([2], this.freq.getMode());
};
FrequencyTest.prototype.testGetSample = function () {
    var sampleFrequency = new Frequency();
    for (var i = 0; i < 1000; i++) 
        sampleFrequency.addValue(this.freq.getSample());
    
    assertEquals(this.freq.getUniqueCount(), sampleFrequency.getUniqueCount());
    assertEquals(this.freq.getMode(), sampleFrequency.getMode());
    
    assertTrue("is the sample distribution within the tolerance?", Math.abs(this.freq.getPct(3) - sampleFrequency.getPct(3)) < .05);
    assertTrue("is the sample distribution within the tolerance?", Math.abs(this.freq.getPct(2) - sampleFrequency.getPct(2)) < .05);
};
