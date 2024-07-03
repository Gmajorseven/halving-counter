export const getLastHalvingBlock = (currentBlock) => {
    const blocksPerHalving = 210000;
    
    // Calculate the number of complete halving periods
    const halvingPeriods = Math.floor(currentBlock / blocksPerHalving);
    
    // Calculate the last halving block
    const lastHalvingBlock = halvingPeriods * blocksPerHalving;
    
    return lastHalvingBlock;
}

export const calculateNextHalvingDate = (currentBlockHeight, lastHalvingBlock, blocksPerHalving = 210000, blockIntervalMinutes = 10)  => {
    // Calculate the next halving block
    const nextHalvingBlock = lastHalvingBlock + blocksPerHalving;
    
    // Calculate the blocks remaining until the next halving
    const blocksRemaining = nextHalvingBlock - currentBlockHeight;
    
    // Calculate the time remaining in minutes
    const timeRemainingMinutes = blocksRemaining * blockIntervalMinutes;
    
    // Convert time remaining to days
    const timeRemainingDays = timeRemainingMinutes / (60 * 24);
    
    // Get the current date
    const currentDate = new Date();
    
    // Calculate the next halving date
    const nextHalvingDate = new Date(currentDate.getTime() + timeRemainingDays * 24 * 60 * 60 * 1000);
    
    return nextHalvingDate;
}
