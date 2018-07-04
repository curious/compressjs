module.exports = {
    BitStream: require('./lib/BitStream'),
    Stream: require('./lib/Stream'),
    BWT: require('./lib/BWT'),
    Context1Model: require('./lib/Context1Model'),
    DefSumModel: require('./lib/DefSumModel'),
    FenwickModel: require('./lib/FenwickModel'),
    MTFModel: require('./lib/MTFModel'),
    NoModel: require('./lib/NoModel'),
    Huffman: require('./lib/Huffman'),
    RangeCoder: require('./lib/RangeCoder'),
    // compression methods
    BWTC: require('./lib/BWTC'),
    Bzip2: require('./lib/Bzip2'),
    Dmc: require('./lib/Dmc'),
    Lzjb: require('./lib/Lzjb'),
    LzjbR: require('./lib/LzjbR'),
    Lzp3: require('./lib/Lzp3'),
    PPM: require('./lib/PPM'),
    Simple: require('./lib/Simple')
};
