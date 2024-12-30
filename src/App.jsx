import React from "react";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Router,
  Await,
} from "react-router-dom";

const App = () => {
  //Add New Job
  const addJob = async (newJob) => {
    const res = await fetch("api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete New Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  //Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;

  {
    /*----Practice--------*/
  }

  {
    /* <div classNameName = "text-5xl">
      App
    </div>
    <p>Hello {name}</p>
    <ul>
      {names.map((name, index)=>(
        <li key={index}>{name}</li>
      ))}
    </ul>
    {loggedIn? <h1>Hello Member</h1> : <h1>Hello Guest</h1>} */
  }

  {
    /*----Practice--------*/
  }

  {
    /* <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewButton /> */
  }
};

export default App;
