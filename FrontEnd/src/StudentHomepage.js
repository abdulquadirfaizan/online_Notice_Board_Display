import React, { useState } from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import StudenttHeader from './StudenttHeader'
import { StudentNavbar } from './StudentNavbar'
export const StudentHomepage = () => {
  const [isHovering, setIsHovering] = useState(0);
  return (
    <>
      <StudenttHeader></StudenttHeader>
      <StudentNavbar></StudentNavbar>

      <div className="baseforeverypage">
        <div className="mainframe">
          <div className="mainframeinnerdiv">
            <div className="firstpart">
              <div className="notice-tab">
                <a href="/StudentDepartmentnotices">
                  <button
                    onMouseEnter={() => {
                      setIsHovering(1);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(0);
                    }}
                  >
                    Department Notices
                  </button>
                </a>
              </div>

              <div className="courseallotment-tab">
                <a href="/StudentPlacementNotices">
                  <button
                    onMouseEnter={() => {
                      setIsHovering(2);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(0);
                    }}
                  >
                    Placement Notices
                  </button>
                  {/* <button>Placement Companies Arrived</button> */}
                </a>
              </div>
              <div className="time-table-tab">
                <a href="/StudentPlacementResultNotices">
                  <button
                    onMouseEnter={() => {
                      setIsHovering(3);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(0);
                    }}
                  >
                    Placement Results
                  </button>
                </a>
              </div>
              <div className="circular-tab">
                <a href="/Studentinternalcirculars">
                  <button
                    onMouseEnter={() => {
                      setIsHovering(4);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(0);
                    }}
                  >
                    Internal Circulars
                  </button>
                </a>
              </div>
              <div className="circular-tab">
                <a href="/Studentexternalcirculars">
                  <button
                    onMouseEnter={() => {
                      setIsHovering(5);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(0);
                    }}
                  >
                    External Circulars
                  </button>
                </a>
              </div>
            </div>
            <div className="secondpart">
              {isHovering === 1 && (
                <div className="depdiscription">
                  Department notices typically refer to official communications
                  or announcements issued by a specific department or
                  organization. These notices can contain important information
                  regarding various matters, such as policy changes, upcoming
                  events, updates, deadlines, or any other relevant information
                  that the department wants to communicate to its members or the
                  public. Department notices are often posted on bulletin
                  boards, websites, or distributed via email or other
                  communication channels to ensure that the intended audience
                  receives the information. They serve as a way to disseminate
                  important messages and keep individuals informed about the
                  activities and updates within a particular department.
                </div>
              )}
              {isHovering === 2 && (
                <div className="placdiscription">
                  "Placement Related Notices" typically refer to official
                  communications or announcements related to job placements or
                  internships. These notices are commonly issued by educational
                  institutions, training centers, or organizations that
                  facilitate placement opportunities for students or job
                  seekers. Placement-related notices can include information
                  about job openings, internships, recruitment drives, campus
                  placements, career fairs, interviews, application procedures,
                  eligibility criteria, deadlines, and other relevant details.
                  These notices are intended to inform individuals about
                  available placement opportunities and provide them with the
                  necessary information to apply or participate in the placement
                  process. Such notices can be displayed on notice boards,
                  shared through email or online portals, or distributed through
                  other communication channels to ensure that the target
                  audience, such as students or job seekers, is aware of the
                  placement-related opportunities and can take appropriate
                  action if interested.
                </div>
              )}

              {isHovering === 3 && (
                <div className="resdepdiscription">
                  The "Result of Placement Notices" typically refers to the
                  announcement or publication of the outcomes of a placement
                  process, such as job placements or internships. After the
                  completion of interviews, assessments, or selection
                  procedures, the organization or educational institution
                  responsible for the placement process may release the results
                  to inform the applicants about the outcome of their
                  applications. The result of placement notices can contain
                  information about which candidates have been selected for
                  specific job positions or internships, including their names,
                  roles, companies, or any other relevant details. These notices
                  serve to communicate the final decisions made by the
                  organization conducting the placements and provide closure to
                  the applicants regarding their application status.
                </div>
              )}

              {isHovering === 4 && (
                <div className="interdepdiscription">
                  Internal circulars are official communications or
                  announcements within an organization that are circulated among
                  its members or employees. These circulars are used to convey
                  important information, updates, policies, procedures, or
                  instructions that are relevant to the internal functioning of
                  the organization. Internal circulars can cover a wide range of
                  topics, such as changes in company policies, organizational
                  restructuring, upcoming events or meetings, training programs,
                  reminders, HR-related matters, safety guidelines, or any other
                  information that needs to be shared within the organization.
                  The purpose of internal circulars is to ensure that all
                  employees or members are informed and aligned with the latest
                  developments and decisions within the organization. Circulars
                  are typically distributed through internal communication
                  channels like email, intranet portals, bulletin boards, or
                  other designated platforms.
                </div>
              )}

              {isHovering === 5 && (
                <div className="exterdepdiscription">
                  External circulars are official communications or
                  announcements that are issued by an organization and intended
                  for recipients outside of the organization. These circulars
                  are typically used to convey important information, updates,
                  notifications, or instructions to external stakeholders such
                  as customers, clients, suppliers, partners, or the general
                  public. External circulars can cover various topics depending
                  on the purpose and context, such as: Public announcements:
                  These circulars may include information about new product
                  launches, service updates, special promotions, or changes in
                  business operations that are relevant to the public or
                  customers. Regulatory compliance: Organizations may issue
                  circulars to communicate updates or changes in regulations,
                  policies, or legal requirements to their stakeholders.
                  Stakeholder notifications: Circulars can be used to inform
                  stakeholders about significant events or developments related
                  to the organization, such as mergers, acquisitions,
                  rebranding, or changes in leadership. Invitations and event
                  notifications: Circulars can be used to invite external
                  stakeholders to attend events, conferences, seminars, or other
                  gatherings organized by the organization. External circulars
                  are typically distributed through various channels such as
                  email, postal mail, social media platforms, websites, press
                  releases, or other communication mediums that ensure the
                  message reaches the intended external audience.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </>
  )
}

export default StudentHomepage