import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button'

function App() {
  const colors = {
    youtube: 'red',
    twitter: 'blue',
    github: 'green'
  }
  const data = {
    name: 'Isaac Mosiron',
    image: "https://github.com/mosidrum.png",
    bio: "co-founder of tech stars community ",
    links: [
      {
        name: "My open source Github",
        url: "https://github.com/mosidum",
        icon: "github",
      },
      {
        name: "Follow me on Twitter",
        url: "https://twitter.com/mosidum",
        icon: "twitter",
      },
      {
        name: "Subsribe to my Youtube",
        url: "https://youtube.com/Ayodeleisaac",
        icon: "youtube",
      }
    ]
  }
  return (
    <div className="p-m-4">
      <div className="p-d-flex p-jc-center p-ai-center">
        <Avatar
          image={data.image}
          size="xlarge"
          shape="circle"
        ></Avatar>
        <h1 className="p-m-2">{data.name}</h1>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center">
        <p>{data.bio}</p>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center">
        <div className="p-d-flex p-flex-column">
          {data.links.map((link) => (
            <Button
              className="p-m-2 p-button-outlined" style={{ color: colors[link.icon] }}>
              <i className={`pi pi-${link.icon} p-px-2`}></i>
              {link.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
