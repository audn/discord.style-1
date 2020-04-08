import { attributes } from '~/content/popular.md'
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
            <div className="col md:w-2/3 lg:w-1/2 text-white">
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                {heading}
              </h1>
              <p className="text-discord-600 font-medium text-lg lg:w-5/6">
                {leading}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-10 md:py-12">
        <div className="container">
        <a href="template1" className="row -mb-8">
            <TemplateCard
              title="Lorem ipsum"
              name="Tom Cook"
              profilePicture="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              username="@tomcook"
              description="Lorem ipsum dolor sit amet"
              tags={['gaming', 'community']}
              downloads={123}
              likes={47}
            />
            <TemplateCard
              title="Lorem ipsum"
              name="Tom Cook"
              profilePicture="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              username="@tomcook"
              description="Lorem ipsum dolor sit amet"
              tags={['gaming', 'community']}
              downloads={123}
              likes={47}
            />
            <TemplateCard
              title="Lorem ipsum"
              name="Tom Cook"
              profilePicture="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              username="@tomcook"
              description="Lorem ipsum dolor sit amet"
              tags={['gaming', 'community']}
              downloads={123}
              likes={47}
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
