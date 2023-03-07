import TeamCard from "../components/TeamCard";

const OurTeam = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <h1 className="text-4xl font-black mt-28">Meet the Team</h1>
      <div className="bg-[#eaf9ff] mt-5">
        <div className="use-card grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2 p-6 sm:p-8 md:p-8 lg:p-16 xl:p-16 2xl:p-16">
          <TeamCard
            fullName="Georgi Karagyozov"
            role="Smart Contract & Front End Engineer"
            srcImg="/images/team/georgi-karagyozov.jpeg"
            altImg="Georgi Karagyozov"
            linkedinLink="https://www.linkedin.com/in/georgi-karagyozov-1a33041b0/"
          />
          <TeamCard
            fullName="Peter Krulis"
            role="Smart Contract Engineer"
            srcImg="/images/team/peter-krulis.jpeg"
            altImg="Peter Krulis"
            linkedinLink="https://www.linkedin.com/in/peter-krulis-4921751a2/"
            twitterLink="https://twitter.com/krulis_petr"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
