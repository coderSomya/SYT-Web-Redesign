import React from 'react'
import DetailsContainer from './DetailsContainer';

const impactDetails = { title: 'Impact', paragraph: 'Since it’s inception in 2022, the SYT Nairobi chapter has helped over 1000 techies grow in their career through mentorship, opensource participations, tech-oriented events and job opportunities. Below is a summary of our impact since 2022.' }
const impactData = [{ title: 'COMMUNITY MEMBERS', value: '1,000' }, { title: 'EVENTS ORGANIZED', value: '200' }, { title: 'JOBS SECURED', value: '50' }, { title: 'PROJECT DONATIONS', value: '+KES 50K' }]
function ImpactSection() {
  // content-between md:px-20

  return (
    <div className="w-full md:w-4/5 ">
      <DetailsContainer {...impactDetails} />
      <div className="px-4 md:w-4/5 grid gap-3 grid-cols-2 md:grid-cols-4">
        {impactData.map(({ title, value }) => (
          <div className="flex flex-col p-2 grid gap-3 ">
            <h5 className="mb-6 text-xs">{title}</h5>
            <h2 className="mb-6 text-2xl md:text-4xl">{value}</h2>
          </div>
        ))}
      </div>

    </div>

  )
}

export default ImpactSection;
