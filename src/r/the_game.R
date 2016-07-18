require(ggplot2)
require(plyr) 

# Read item table
Items <- read.table("/Users/mliquori/Dropbox/tech/projects/the_game/src/data/combinedItems.csv", TRUE, ",")

# count the number of rare items
rarityFreq <- count(Items[,3])
pie(rarityFreq[,2], col = rainbow(4))

# count number of each item
nameFreq <- count(Items[,1])
# Sort by Freq
nameFreqDesc <- nameFreq[order(nameFreq[,2],decreasing=TRUE),]

# plot frequency against rarity
qplot(rarityFreq$x, rarityFreq$freq, color=rarityFreq$x)

# Plot top 10 items
top10 <- nameFreqDesc[1:10,]
rownames(top10) <- top10$x
top10 <- top10[-1]

# qplot(rownames(top10), top10$freq) #, geom = "bar", ylab = "# items", xlab = rownames(top10))
top10$order <- factor(rownames(top10), levels = rownames(top10)[order(top10$freq)])
qplot(top10$freq, top10$order, xlab="number in inventory", ylab="items", main="Top 10 items in inventory")
# qplot(top10$freq, rownames(top10))

hist(top10[,1], xlab=rownames(top10))
barplot(top10[,1], xlab=rownames(top10), col = rainbow(10))
qplot(top10[,1], xlab=rownames(top10), col = rainbow(10))

