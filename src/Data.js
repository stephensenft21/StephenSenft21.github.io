import Stephen from "./images/me2.jpg";
import Employee from "./images/Employee1.png";
import Lofi from "./images/lofi_2.gif";
import Bangazon from "./images/BangazonFigma.png";
import Research from "./images/research.jpg";
import Mapping from "./images/journeyMapping.jpg";
import empathy from "./images/mapping.jpg";
import BangazonDashBoard from "./images/BangazonDashboard.png";
import resume from "./images/StephenSenftResume.pdf";
import addComputer from "./images/addComputer.png";

export default {
	name: "Stephen Senft",
	Showname: true,

	headerTagline: [
		"Stephen Senft",
		//Line 1 For Header
		//Line 2 For Header
		"Full Stack Software Developer",
		//Line 3 For Header
		"Nashville TN"
	],
	resume: resume,
	//Contact Email
	contactEmail: "stephensenft21@gmail.com",
	// Add Your About Text Here
	abouttext: "I’m a Full-stack Software Developer. Solving new problems every single day When I am not coding I keep myself busy playing various team sports, staying fit in the gym, swimming, and rock-climbing. Despite leaving the restaurant industry My love for food and cooking hasn't diminished. I enjoy stretching my creative muscles mastering unique dishes in the kitchen. I am looking forward to working in a team environment, growing my skills and becoming an integral part of the Nashville tech community.",
	abouttext2: "",
	aboutImage: Stephen,
	ShowAboutImage: true,

	intro: "With most UI/UX and coding project I rely heavily on user interviews to begin. Knowing the users story, creating their empathy maps, documenting their pain points and overall needs helps me start with an idea of who the user is.",

	intro2: "From there I can create Personas that the project may refer to while moving forward. Contextual inquiry and journey mapping help me develop diagrams that will depict stages the user will interact with while navigating my project. Having this information helps guid my preliminary wireframes, or Lo-Fi Mockups, which are essential for user testing. Through user testing I can evaluate a project or product feature in a easily updated prototype to evaluate real user interaction.",

	intro3: "Any number of these steps may be revisited to inform th stages leading up to coding a project. Finally High fidelity mockups help me to visualize the finally stages of the project before coding begins.",
	copyWright: "Copyright © 2020 Stephen Senft",
	projects: [{
			id: 1,
			title: "Persona: Cheif Training Officer", //Project Title - Add Your Project Title Here
			service: "Built For Consumer Web-Applications", // Add Your Service Type Here
			//Project Image - Add Your Project Image Here
			imageSrc: Employee
			//Project URL - Add Your Project Url Here
			// url: "images/Employee1.png"
		},
		{
			id: 2,
			title: "Journey/Empathy Mapping",
			service: "Gaining a Deeper Understanding of Users",
			imageSrc: empathy
			// url: "http://sageklein.com/"
		},
		{
			id: 3,
			title: "Site Mapping",
			service: "Diagraming Views of Customer Interactions",
			imageSrc: Mapping
			// url: "http://sageklein.com/"
		},
		{
			id: 4,
			title: "User Testing",
			service: "Observing User Testing of Lo-Fi Mockup",
			imageSrc: Lofi
			// url: "http://sageklein.com/"
		},
		{
			id: 5,
			title: "User Testing",
			service: "Interviewing a User Navigating a Lo-Fi Mockup",
			imageSrc: Research
			// url: "http://sageklein.com/"
		},
		{
			id: 6,
			title: "Figma Mock-Up Of Bangazon Project",
			service: "Hi-Fi Mock-Up for Bangazon",
			imageSrc: Bangazon
			// url: "http://sageklein.com/"
		},
		{
			id: 7,
			title: "Figma View Of Dashboard",
			service: "Hi-Fi MockUp for Bangazon",
			imageSrc: BangazonDashBoard
			// url: "http://sageklein.com/"
		},
		{
			id: 8,
			title: "Figma View to Add Computer Drawer",
			service: "Hi-Fi MockUp for Bangazon",
			imageSrc: addComputer
			// url: "http://sageklein.com/"
		}
	],

	social: [
		// Add Or Remove The Link Accordingly
		{
			name: "Github",
			url: "https://github.com/stephensenft21"
		},

		{
			name: "Linked In",
			url: "https://www.linkedin.com/in/stephen-senft/"
		},
		{
			name: "Behance",
			url: "https://www.behance.net/stephensenft"
		},
		{
			name: "Dribbble",
			url: "https://dribbble.com/ssenft21"
		},
		{
			copyWright: "Copyright © 2020 Stephen Senft"
		}
	]
};