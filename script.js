// this is a random elevator pitch generator

const pitchObj = {
    problem: ['your happiness','the world hunger', 'covid pandemic', 'the housing problem', 'multi planetary problem', 'world poverty', 'your sex life', 'your dishes', 'fashion', 'metaverse'],
    buzz: ['disruptive', 'revolutionary', 'super', 'awesome', 'giga', 'AI', 'intelligent', 'lean', 'fast', 'machine learning', 'algorithm', 'algoritmic', 'scientific', 'design', 'synthetic', 'evolutionary', 'quantum'],
    solution: ['social media', 'mobile application', 'robot', 'flying cars', 'pills', 'machines', 'yoga', 'voyage', 'wallet', 'trans', 'giga factory'],
    technology: ['technology', 'solutions', 'big data', 'surgery', 'machine learning', 'super computers', 'quantum quantum', 'going to the moon', 'rocket technology'],
    problemStart: 'We solve ',
    solutionStart: 'with ',
    technologyStart: 'by '
};

const generatePitch = (pitchObj) => {
    return pitchObj.problemStart + pitchObj.problem[Math.floor(Math.random()*pitchObj.problem.length)] + ' ' + pitchObj.solutionStart + pitchObj.buzz[Math.floor(Math.random()*pitchObj.buzz.length)] + ' ' + pitchObj.solution[Math.floor(Math.random()*pitchObj.solution.length)] + ' ' + pitchObj.technologyStart + pitchObj.buzz[Math.floor(Math.random()*pitchObj.buzz.length)] + ' ' + pitchObj.technology[Math.floor(Math.random()*pitchObj.technology.length)]+ '.';
}

console.log(generatePitch(pitchObj));
