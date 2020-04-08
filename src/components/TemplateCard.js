const Download = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

const Like = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
  </svg>
)

const TemplateCard = ({
  name,
  profilePicture,
  username,
  description,
  title,
  link = '#',
  tags = [],
  likes = 0,
  downloads = 0,
  emoji = '🥕',
  ...props
}) => {
  return (
    <div className="col mb-8 w-full md:w-1/2 lg:w-1/3" {...props}>
      <div className="bg-discord-200 overflow-hidden shadow rounded-lg text-white h-full flex flex-col justify-between">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex -mx-2 justify-between items-center">
            <div className="w-2/3 mx-2">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p>{description}</p>
            </div>
            <div className="w-1/3 mx-2 flex-shrink-0 text-5xl text-right">
              <div className="w-20 ml-auto">
                <div
                  className="relative bg-discord-300 rounded-full"
                  style={{ paddingTop: '100%' }}
                >
                  <div className="absolute centered">{emoji}</div>
                </div>
              </div>
            </div>
          </div>
          <ul className="flex -mx-1 mt-2">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="mx-1 border-2 border-discord-primary leading-none whitespace-no-wrap text-xs py-1 px-2 rounded-full text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center flex-wrap sm:flex-no-wrap bg-discord-300 px-4 py-5 sm:p-6 -mx-4">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full bg-discord-100"
                src={profilePicture}
                alt={name}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-white">
                {name}
              </h3>
              <p className="text-sm leading-5 text-discord-500">
                <a href="#">{username}</a>
              </p>
            </div>
          </div>
          <ul className="flex -mx-2 px-4">
            <li className="flex items-center text-sm font-medium tracking-wider text-discord-600 mx-2">
              <Download className="fill-current text-white opacity-25 mr-1 h-5 w-auto" />
              {downloads}
            </li>
            <li className="flex items-center text-sm font-medium tracking-wider text-discord-600 mx-2">
              <Like className="fill-current text-white opacity-25 mr-1 h-5 w-auto" />
              {likes}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
const TemplateCardReport = ({
  name,
  profilePicture,
  username,
  description,
  title,
  link = '#',
  tags = [],
  edit = 0,
  emoji = '🥕',
  del = 0,
  ignore = '🥕',
  ...props
}) => {
  return (
    <div className="col mb-8 w-full md:w-1/2 lg:w-1/3" {...props}>
      <div className="bg-discord-200 overflow-hidden shadow rounded-lg text-white h-full flex flex-col justify-between">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex -mx-2 justify-between items-center">
            <div className="w-2/3 mx-2">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p>{description}</p>
            </div>
            <div className="w-1/3 mx-2 flex-shrink-0 text-5xl text-right">
              <div className="w-20 ml-auto">
                <div
                  className="relative bg-discord-300 rounded-full"
                  style={{ paddingTop: '100%' }}
                >
                  <div className="absolute centered">{emoji}</div>
                </div>
              </div>
            </div>
          </div>
          <ul className="flex -mx-1 mt-2">
            {tags.map((tag) => (
              <li className="mx-1 border-2 border-discord-primary leading-none whitespace-no-wrap text-xs py-1 px-2 rounded-full text-white">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center flex-wrap sm:flex-no-wrap bg-discord-300 px-4 py-5 sm:p-6 -mx-4">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full bg-discord-100"
                src={profilePicture}
                alt={name}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-white">
                {name}
              </h3>
              <p className="text-sm leading-5 text-discord-500">
                <a href="#">{username}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="px-3 py-4 inline-block bg-discord-primary text-center">
          {ignore}
        </div>
        <div className="px-3 py-4 inline-block bg-discord-success text-center ">
          {edit}
        </div>
        <div className="px-3 py-4 inline-block bg-discord-fail text-center ">
          {del}
        </div>
      </div>
    </div>
  )
}

export { TemplateCard as default, TemplateCardReport }
