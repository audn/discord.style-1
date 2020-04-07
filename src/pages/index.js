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
            <div className="col md:w-2/3 lg:w-1/2 text-white">
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                {heading}
              </h1>
              <p className="text-discord-600 font-medium text-lg lg:w-5/6">
                {leading}
              </p>
              <div className="flex flex-wrap -m-2 mt-6 sm:mt-10">
                <a
                  href="#"
                  className="leading-5 py-5 font-bold px-6 m-2 bg-discord-primary rounded-lg transition duration-200 ease-in-out hover:bg-discord-primary-dark"
                >
                  Check it out, it's free!
                </a>
                <a
                  href="#"
                  className="leading-5 py-5 font-bold px-6 m-2 border-2 border-discord-600 text-discord-600 rounded-lg transition duration-200 ease-in-out hover:border-discord-500 hover:text-discord-500"
                >
                  Random Template
                </a>
              </div>
            </div>
            <div className="col md:w-1/3 lg:w-1/2 self-center hidden md:block">
              <button className="text-discord-success flex text-xl font-bold justify-center items-center mx-auto transition duration-200 ease-in-out hover:text-white bg-discord-300 px-8 lg:px-10 py-6 lg:py-8 rounded-lg shadow-lg border-2 border-discord-success hover:border-white w-full sm:w-auto">
                <Plus className="w-6 lg:w-10 fill-current block mr-1 lg:mr-2 opacity-50" />
                Create{' '}
                <span className="hidden lg:inline">&nbsp;a template</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-10 md:py-12">
        <div className="container">
          <div className="row -mb-8">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
