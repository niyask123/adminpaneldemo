import React from "react";
import ProjectStatics from "../components/ProjectStatics";
import Platforms from "../components/Platforms";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";
import MemberCard from "../components/MemberCard";

const Home = () => {
  const projects = [
    {
      name: "web",
      type: "web deve",
      date: "2024-03-15",
      members: ["alice", "bob", "charle"],
      file: 4,
      prgress: 20,
    },
    {
      name: "web",
      type: "web deve",
      date: "2024-03-15",
      members: ["alice", "bob", "charle"],
      file: 4,
      prgress: 20,
    },
    {
      name: "web",
      type: "web deve",
      date: "2024-03-15",
      members: ["alice", "bob", "charle"],
      file: 4,
      prgress: 20,
    },
    // {
    //   name: "web",
    //   type: "web deve",
    //   date: "2024-03-15",
    //   members: ["alice", "bob", "charle"],
    //   file: 4,
    //   prgress: 20,
    // },
    {
      name: "web",
      type: "web deve",
      date: "2024-03-15",
      members: ["alice", "bob", "charle"],
      file: 4,
      prgress: 20,
    },
  ];
  const clients = [
    {
      name: "ABC Corporation",
      title: "CEO",
      date: "2024-04-10T09:00:00z",
    },
    {
      name: "ABC Corporation",
      title: "CEO",
      date: "2024-04-10T09:00:00z",
    },
    {
      name: "ABC Corporation",
      title: "CEO",
      date: "2024-04-10T09:00:00z",
    },
    {
      name: "ABC Corporation",
      title: "CEO",
      date: "2024-04-10T09:00:00z",
    },
  ];

  const members = [
    {
      total_members: 4,
      job: "UI Designer",
    },
    {
      total_members: 8,
      job: "Forntend Developer",
    },
    {
      total_members: 3,
      job: "Mobile App Develoepr",
    },
    {
      total_members: 4,
      job: "Backend Develoepr",
    },
  ];
  return (
    <div className="p-5 ">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <ProjectStatics />
        <Platforms />
        <ProjectStatics />
        <Platforms />
      </div>
      <div className="">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-semibold">Current Pejects</h1>
          <p className="text-sm underline text-indigo-600">See all</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects &&
            projects.map((project) => <ProjectCard project={project} />)}
        </div>
      </div>

      <div className="">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-semibold">Current Clients</h1>
          <p className="text-sm underline text-indigo-600">See all</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {clients && clients.map((client) => <ClientCard client={client} />)}
        </div>
      </div>

      <div className="">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-semibold">Members</h1>
          <p className="text-sm underline text-indigo-600">See all</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {members && members.map((member) => <MemberCard member={member} />)}
        </div>
      </div>

      {/* <div className="">
        <div className="justify-between flex w-full items-center">
          <div className="text-lg w-full font-semibold flex justify-between">
            <h1>Current Projects</h1>
            <p className="text-sm underline text-indigo-600">See all</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects && projects.map((id) => <ProjectCard project={projects} />)}
        </div>
      </div>

      <div className="">
        <div className="justify-between flex w-full items-center">
          <div className="text-lg w-full font-semibold flex justify-between">
            <h1>Current Client</h1>
            <p className="text-sm underline text-indigo-600">See all</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {clients && projects.map((client) => <ClientCard client={client} />)}
        </div>
      </div> */}
    </div>
  );
};

export default Home;
