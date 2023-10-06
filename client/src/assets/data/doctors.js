import doctorImg01 from "../images/doctor-img01.png";
import doctorImg02 from "../images/doctor-img02.png";
import doctorImg03 from "../images/doctor-img03.png";

export const doctors = [
	{
		id: "01",
		name: "Dr. Richard Gelberman",
		specialization: "Surgeon",
		avgRating: 4.8,
		totalRating: 297,
		photo: doctorImg03,
		totalPatients: 1700,
		hospital: "Northwestern Memorial Hospital, Chicago.",
	},
	{
		id: "02",
		name: "Dr. Edward Geltman",
		specialization: "Neurologist",
		avgRating: 4.9,
		totalRating: 312,
		photo: doctorImg02,
		totalPatients: 1830,
		hospital: "Massachusetts General Hospital, Boston.",
	},
	{
		id: "03",
		name: "Dr. Milan Anadkat",
		specialization: "Dermatologist",
		avgRating: 4.7,
		totalRating: 272,
		photo: doctorImg01,
		totalPatients: 1500,
		hospital: "The Johns Hopkins Hospital, Baltimore.",
	},
];
