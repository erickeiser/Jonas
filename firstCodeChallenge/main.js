var markHeight, markWeight, markBmi, JohnBmi, johnHeight, johnWeight, 
markHeight = 1.78
markWeight = 83
markBmi = markWeight / (markHeight * markHeight)
johnHeight = 2.08
johnWeight = 96
johnBmi= johnWeight / (johnHeight * johnHeight)

var isMarkHigher = markBmi > johnBmi

console.log('is Mark\'s bmi higher than John\'s bmi? ' + isMarkHigher)


