import React from 'react'
import Cards from './components/Cards'
const App = () => {
  const jobOpenings = [
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Google",
      datePosted: "5 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 55,
      location: "Delhi, India"
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      companyName: "Amazon",
      datePosted: "10 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      companyName: "Meta",
      datePosted: "3 weeks ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 58,
      location: "Gurgaon, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      companyName: "Netflix",
      datePosted: "6 weeks ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Remote, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 80,
      location: "Noida, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      companyName: "Tesla",
      datePosted: "8 weeks ago",
      post: "Data Analyst",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 65,
      location: "Pune, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      companyName: "NVIDIA",
      datePosted: "4 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 90,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      companyName: "Uber",
      datePosted: "9 weeks ago",
      post: "Android Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: 62,
      location: "Delhi, India"
    },
    {
      brandLogo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/airbnb-9xpw4kf7zr9850h17qznf.png/airbnb-4rfqv9z0up9auj6x43g07v.png?_a=DATAg1AAZAA0",
      companyName: "Airbnb",
      datePosted: "7 weeks ago",
      post: "Product Manager",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 85,
      location: "Remote, India"
    }
  ];

  console.log(jobOpenings)

  return (
    <div className='parent' >
      {jobOpenings.map(function (elem, idx) {
        console.log(idx);
        return <div key={idx}>
          <Cards companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} pay={elem.pay} location={elem.location} />
        </div>
      })}

    </div>
  )
}

export default App
