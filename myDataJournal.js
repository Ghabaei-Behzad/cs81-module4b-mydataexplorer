//Behzad Ghabaei
//CS81 - Javascript
//Instructor Seno
//Assignment 4B - My Personal Data Objects
//January 15, 2026
// myDataJournal.js

//Predictions:
// 1. I think the most screen time is Sunday as opposed to our example data journal posted which was on Wednesday.
// 2. My prediction for the best focus would be on Tuesday because of getting enough sleep and caffeine intake.
// 3. Caffeine impact would be Wednesday because of the most intake, thus higher focus.

//Make an Array of Objects

const weekData = [
  { day: "Monday", sleepHours: 7, screenTime: 5, mood: "tired", caffeineIntake: 2, focusLevel: 6 },
  { day: "Tuesday", sleepHours: 8, sreenTime: 4, mood: "productive", caffeineIntake: 1, focusLevel: 9 },
  { day: "Wednesday", sleepHours: 6, screenTime: 7, mood: "stressed", caffeineIntake: 3, focusLevel: 5 },
  { day: "Thursday", sleepHours: 7.5, screenTime: 4.5, mood: "productive", caffeineIntake: 1, focusLevel: 8 },
  { day: "Friday", sleepHours: 6.5, screenTime: 6, mood: "excited", caffeineIntake: 2, focusLevel: 7 },
  { day: "Saturday", sleepHours: 9, screenTime: 3, mood: "relaxed", caffeineIntake: 0, focusLevel: 4 },
  { day: "Sunday", sleepHours: 8, screenTime: 8, mood: "lazy", caffeineIntake: 0, focusLevel: 3 }
  ];
const journalAnalyzer = {
  data: weekData,
  /**
  * Iterations through the weekly data to find the entry with the highest screen time.
  * returns string describing the day and the number of hours
  */
  findHighestScreenTime() {
    let maxEntry = this.data[0];
    for(let entry of this.data) {
      if (entry.screenTime > maxEntry.screenTime) maxEntry = entry;
    }
    return `${maxEntry.day} (${maxEntry.screenTime} hrs)`;
  },
  /**
  * Calculate the mean average of sleep hours across all recorded days.
  * returns a string, the average sleep rounded to one decimal place.
  */
  averageSleep() {
    let total = this.data.reduce((sum, entry) => sum + entry.sleepHours, 0);
    return (total / this.data.length).toFixed(1);
  },
  /**
  * Identifies the most frequently occuring mood string in the journal data
  * returns a string. The mood name that appears most often.
  * Find the key with the highest value in the counts object.
  */
  mostFrequentMood() {
    const counts = {};
    this.data.forEach(entry => counts[entry.mood] = (counts[entry.mood] || 0) + 1);
    return Object.keys(counts).reduce((a,b) => counts[a] > counts[b] ? a : b);
  },
    
  
  
  
    
  
