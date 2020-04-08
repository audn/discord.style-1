import { attributes } from '~/content/template.md'
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
                templatename
              </h1>
              <p className="text-discord-600 font-medium text-lg lg:w-5/6">
                templatedescription
              </p>
              <p className="text-discord-600 font-medium text-lg lg:w-5/6">
                27 people using this template
              </p>
              <p className="text-discord-500  font-medium text-lg lg:w-5/6 py-4">
                Made by audn#1580
              </p>
            </div>
            <div className="col md:w-1/3 lg:w-1/2 self-center hidden md:block">
              <div className="text-discord-500 bg-discord-200 mx-auto w-1/2 p-5 rounded-md">
                <div className="uppercase font-bold pt-2 pb-2 text-xs">
                  <i class="fas fa-caret-down text-discord-400"></i>{' '}
                  categoryname
                </div>
                <div className="block pl-2 hover:bg-discord-700 hover:rounded-full align-middle">
                  <span class="pr-2 text-2xl text-discord-500 align-middle">
                    #
                  </span>{' '}
                  textchannel
                </div>
                <div className="uppercase font-bold pt-2 pb-2 text-xs">
                  <i class="fas fa-caret-down text-discord-400"></i>{' '}
                  categoryname
                </div>
                <div
                  className="block pl-2 hover:bg-discord-700 hover:rounded-full"
                  align-middle
                >
                  <span class="pr-2 text-2xl text-discord-500 align-middle">
                    #
                  </span>{' '}
                  textchannel
                </div>
                <div className="block pl-2 hover:bg-discord-700 hover:rounded-full align-middle">
                  <span class="pr-2 text-2xl text-discord-500 align-middle">
                    #
                  </span>{' '}
                  textchannel
                </div>
                <div className="block pl-2 hover:bg-discord-700 hover:rounded-full align-middle">
                  <span class="pr-2 text-2xl text-discord-500 align-middle">
                    #
                  </span>{' '}
                  textchannel
                </div>
                <div className="uppercase font-bold pt-2 pb-2 text-xs">
                  <i class="fas fa-caret-down text-discord-400"></i>{' '}
                  categoryname
                </div>
                <div className="block pl-2 hover:bg-discord-700 hover:rounded-full align-middle">
                  <span class="pr-2 text-2xl text-discord-500 align-middle ">
                    #
                  </span>{' '}
                  textchannel
                </div>
                <div className="block pl-2 hover:bg-discord-700 hover:rounded-full align-middle">
                  <span class="pr-2 text-xl text-discord-500 align-middle">
                    {' '}
                    <i class="fad fa-volume"> </i>
                  </span>{' '}
                  textchannel
                </div>
              </div>
              <p>&nbsp;</p>
              <div className="text-discord-500 bg-discord-200 mx-auto w-1/2 p-5 rounded-md">
                <div className="block pl-2 hover:bg-discord-700 hover:rounded-full align-middle">
                  <div class=" py-1 px-4 inline-block align-middle rounded-full border-discord-success border-solid border-2 text-discord-success">
                    <span className="align-middle inline-block h-4 mr-2 w-3 pr-4 rounded-full bg-discord-success ">
                      &nbsp;
                    </span>
                    role
                  </div>
                </div>
                <div className="block pl-2 hover:bg-discord-700 hover:rounded-full align-middle">
                  <div class=" py-1 px-4 inline-block align-middle rounded-full border-discord-success border-solid border-2 text-discord-success">
                    <span className="align-middle inline-block h-4 mr-2 w-3 pr-4 rounded-full bg-discord-success ">
                      &nbsp;
                    </span>
                    role
                  </div>
                </div>
                <div className="block pl-2 hover:bg-discord-700 hover:rounded-full align-middle">
                  <div class=" py-1 px-4 inline-block align-middle rounded-full border-discord-success border-solid border-2 text-discord-success">
                    <span className="align-middle inline-block h-4 mr-2 w-3 pr-4 rounded-full bg-discord-success ">
                      &nbsp;
                    </span>
                    role
                  </div>
                </div>
                <div className="block pl-2 hover:bg-discord-700 hover:rounded-full align-middle">
                  <div class=" py-1 px-4 inline-block align-middle rounded-full border-discord-success border-solid border-2 text-discord-success">
                    <span className="align-middle inline-block h-4 mr-2 w-3 pr-4 rounded-full bg-discord-success ">
                      &nbsp;
                    </span>
                    role
                  </div>
                </div>
                <div className="block pl-2 hover:bg-discord-700 hover:rounded-full align-middle">
                  <div class=" py-1 px-4 inline-block align-middle rounded-full border-discord-success border-solid border-2 text-discord-success">
                    <span className="align-middle inline-block h-4 mr-2 w-3 pr-4 rounded-full bg-discord-success ">
                      &nbsp;
                    </span>
                    role
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-10 md:py-12">
        <div className="container">
          <p className="text-discord-600 font-medium text-lg lg:w-5/6 pb-8">
            Maybe these ones will help?
          </p>
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
