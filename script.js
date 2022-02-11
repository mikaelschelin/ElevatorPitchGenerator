// this is a random elevator pitch generator

let problemArr = ['your happiness','the world hunger', 'covid pandemic', 'the housing problem', 'multi planetary problem', 'world poverty', 'your sex life', 'your dishes', 'fashion', 'metaverse'];
let buzzArr = ['disruptive', 'revolutionary', 'super', 'awesome', 'giga', 'AI', 'intelligent', 'lean', 'fast', 'machine learning', 'algorithm', 'algoritmic', 'scientific', 'design', 'synthetic', 'evolutionary', 'quantum'];
let solutionArr = ['social media', 'mobile application', 'robot', 'flying cars', 'pills', 'machines', 'yoga', 'voyage', 'wallet', 'trans', 'giga factory'];
let technologyArr = ['technology', 'solutions', 'big data', 'surgery', 'machine learning', 'super computers', 'quantum quantum', 'going to the moon', 'rocket technology'];

const problemStart = 'We solve ';
const solutionStart = 'with ';
const technologyStart = 'by ';

const generatePitch = (problemArr, buzzArr, solutionArr, problemStart, solutionStart, technologyStart) => {
    return problemStart + problemArr[Math.floor(Math.random()*problemArr.length)] + ' ' + solutionStart + buzzArr[Math.floor(Math.random()*buzzArr.length)] + ' ' + solutionArr[Math.floor(Math.random()*solutionArr.length)] + ' ' + technologyStart + buzzArr[Math.floor(Math.random()*buzzArr.length)] + ' ' + technologyArr[Math.floor(Math.random()*technologyArr.length)]+ '.';
}

console.log(generatePitch(problemArr, buzzArr, solutionArr, problemStart, solutionStart, technologyStart));
