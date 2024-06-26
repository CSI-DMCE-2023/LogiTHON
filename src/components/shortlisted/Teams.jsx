import React from "react";
import Shortlistedcards from "./Shortlistedcards";

export default function Teamshortsection() {
  const problemstatement1 = [
    { teamname: "Code Geass", teamlead: "Ishaan Parsone" },
    { teamname: "Syn'ax", teamlead: "Anushka Pandit" },
    { teamname: "whocares", teamlead: "Taher Ariwala" },
    // { teamname: "ALGORTHIM AVENGERS", teamlead: "Uthkrushta Mathur" },
    { teamname: "Brocode", teamlead: "Ali Malik" },
    { teamname: "Byte coders", teamlead: "Soham Patil" },
    { teamname: "Cybergirlism", teamlead: "Roshni Sahoo" },
    { teamname: "DeepRest", teamlead: "Mukund Iyer" },
    { teamname: "flutterFlies", teamlead: "Manthan Parsekar" },
    { teamname: "LANICODERS", teamlead: "Rahul Kamble" },
    { teamname: "Mid-Max", teamlead: "Kasam Mapara" },
    { teamname: "The Innovation Incubators", teamlead: "Ashish Jadhav" },
    { teamname: "BETA", teamlead: "Aden Ansari" },
    { teamname: "CyberTitans", teamlead: "Sumeet Gupta" },
  ];
  const problemstatement2 = [
    { teamname: "ASAP Coders", teamlead: "PAARTH BARADIA" },
    { teamname: "Pravartak", teamlead: "Tejas Paradkar" },
    { teamname: "AlgoTwists", teamlead: "Sakshi Dhamapurkar" },
    { teamname: "BlockBusters", teamlead: "Mihir Pandit" },
    { teamname: "CodeJourney", teamlead: "Rudraksh Raut" },
    { teamname: "HackBreakers", teamlead: "Disha Honmane" },
    { teamname: "L(ETH)AL", teamlead: "Shaurya S" },
    { teamname: "Nexus Coders", teamlead: "Chaitanya Shivade" },
    { teamname: "QuatXplorers", teamlead: "Soham More" },
    { teamname: "Team Vulcan", teamlead: "LAKSH JAIN" },
    // { teamname: "Tech Army", teamlead: "Mandvi Shukla" },
    { teamname: "The Recursives", teamlead: "Vishesh Gatha" },
    { teamname: "web3galaxy", teamlead: "Vedant Jha" },
    { teamname: "InnovateXcel", teamlead: "Durgesh Firake" },
  ];
  const problemstatement3 = [
    { teamname: "NorthStar 3.O", teamlead: "Omkar Kale" },
    { teamname: "It's A Feature", teamlead: "Vineet Parmar" },
    { teamname: "ALPHA iQ", teamlead: "Vedant Deshmukh" },
    { teamname: "CodeSmashers", teamlead: "Simran Patil" },
    { teamname: "debugging_barbies", teamlead: "Soha Jawdekar" },
    { teamname: "Forkers", teamlead: "Utkarsh Sharma" },
    { teamname: "init 0", teamlead: "Shivam Musterya" },
    { teamname: "LazyMakers", teamlead: "Sarthak Shitole" },
    { teamname: "No Direction", teamlead: "Parth Mahakal" },
    { teamname: "Pollux", teamlead: "Saksha Gotad" },
    { teamname: "HashBytes", teamlead: "Shriraj Patil" },
    { teamname: "Virtual Voyagers", teamlead: "Sai Patil" },
  ];
  const problemstatement4 = [
    { teamname: "DataMiners", teamlead: "Janhavi Chaudhari" },
    { teamname: "Astrea", teamlead: "Devanshu Mahapatra" },
    { teamname: "Team Confluence", teamlead: "Mahesh Sathe" },
    { teamname: "hackHEMISPHERE", teamlead: "akshita bhasin" },
    { teamname: "LionsOfVit", teamlead: "PRAKASHCHAND CHOUDHARY" },
    { teamname: "NekoX", teamlead: "Devyani Chavan" },
    { teamname: "argentavious", teamlead: "Trushank Vashikar" },
    { teamname: "SAARTHI", teamlead: "Shaswat mishra" },
    // { teamname: "Proto", teamlead: "shubham Varma" },
    // { teamname: "Team Swift", teamlead: "Karan Patel" },
    { teamname: "Dev Dynasty", teamlead: "Huda Alam" },
    { teamname: "/dev/null", teamlead: "Sumit Patel" },
  ];

  return (
    <div id="shortlisted-teams">
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="pb-10 text-3xl md:text-5xl text-white font-semibold text-center z-[100]">
              FINAL SHORTLISTED TEAMS
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className=" rounded-lg shadow-lg p-6 transform  transition duration-300 border border-white/[0.2]">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-cyan-400  text-center mx-auto">
                  Problem Statement 1
                </h3>
              </div>
              <div className="flex-col gap-4">
                {problemstatement1.map((teams, index) => (
                  <Shortlistedcards teamname={teams} key={index} />
                ))}
              </div>
            </div>
            <div className=" rounded-lg shadow-lg p-6 transform  transition duration-300 border border-white/[0.2]">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-cyan-400  text-center">
                  Problem Statement 2
                </h3>
              </div>
              <div className="flex-col gap-4">
                {problemstatement2.map((teams, index) => (
                  <Shortlistedcards teamname={teams} key={index} />
                ))}
              </div>
            </div>
            <div className=" rounded-lg shadow-lg p-6 transform  transition duration-300 border border-white/[0.2]">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-cyan-400  text-center">
                  Problem Statement 3
                </h3>
              </div>
              <div className="flex-col gap-4">
                {problemstatement3.map((teams, index) => (
                  <Shortlistedcards teamname={teams} key={index} />
                ))}
              </div>
            </div>
            <div className=" rounded-lg shadow-lg p-6 transform  transition duration-300 border border-white/[0.2]">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-cyan-400  text-center">
                  Problem Statement 4
                </h3>
              </div>
              <div className="flex-col gap-4">
                {problemstatement4.map((teams, index) => (
                  <Shortlistedcards teamname={teams} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
