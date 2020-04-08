import { attributes } from '~/content/home.md'
import TemplateCard from '~/components/TemplateCard'

const { heading, leading } = attributes

const Plus = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
  </svg>
)

const Home = () => {
  return (
    <>
      <div className="bg-discord-0 py-8 sm:py-10 md:py-12">
        <div className="container">
          <div className="row">
            <div className="col md:w-2/3 lg:w-1/2">
              <h1 className="text-4xl font-bold mb-4 leading-tight text-white">
                Template Guidelines
              </h1>
              <p className="text-discord-600 font-medium mb-4 text-lg lg:w-5/6 text-white">
                Legal Disclaimer
              </p>
              <span className="text-discord-500  text-white">
                We have a team of staff going over every template posted. If we
                find a template that is against our Guidelines, our team
                reserves the right to take disciplinary actions as seen fit
                against templates that break the Guidelines.
                <span className="pt-4">
                  Disciplinary actions can include warnings for minor first
                  offenses up to permanent bans for heavy or repeated violations
                  of rules.
                </span>
              </span>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-10 md:py-12 text-white">
        <div className="container">
          <h1 className="text-4xl font-bold mt-4 mb-4 leading-tight">
            Guidelines
          </h1>
          <span className="text-discord-500">
            <div className="bg-discord-300 py-4 px-4 mb-3 rounded-md ">
              Templates must not contain any content that is against the Terms
              Of Service of Discord or Law.{' '}
              <a href="https://discordapp.com/terms" class="text-discord-logo">
                Read TOS here
              </a>
              .
            </div>
          </span>
          <h3 className="text-2xl font-bold mt-4 mb-4 leading-tight">
            Your template will violate the guidelines if it:
          </h3>
          <span className="text-discord-500">
            <div className="bg-discord-300 py-4 px-4 mb-3 rounded-md ">
              Includes advertisements in the templates.
            </div>
            <div className="bg-discord-300 py-4 px-4 mb-3 rounded-md ">
              Includes clues like links, invite codes, and advertisements.
            </div>
            <div className="bg-discord-300 py-4 px-4 mb-3 rounded-md ">
              Icludes affiliate marketing.
            </div>
            <div className="bg-discord-300 py-4 px-4 mb-3 rounded-md ">
              It is a copy of another template on our website.
            </div>
            <div className="bg-discord-300 py-4 px-4 mb-3 rounded-md ">
              Includes racism, adultery, and blaspheme.
            </div>
          </span>
          <h3 className="text-2xl font-bold mt-4 mb-4 leading-tight">
            You will violate the guidelines if you:
          </h3>
          <span className="text-discord-500">
            <div className="bg-discord-300 py-4 px-4 mb-3 rounded-md ">
              Bypass a ban.
            </div>
            <div className="bg-discord-300 py-4 px-4 mb-3 rounded-md ">
              Violate discord guidelines.
            </div>
            <div className="bg-discord-300 py-4 px-4 mb-3 rounded-md ">
              Violate template guidelines.
            </div>
          </span>
        </div>
      </div>
    </>
  )
}

export default Home
