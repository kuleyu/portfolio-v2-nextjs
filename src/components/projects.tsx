import {useTheme} from '../hooks/use_theme'
import {Svgs} from './svgs'
import {projects} from '../data'
import {Video} from './video'
import {Content} from '../components/content'
import {Project} from './project'

// persist between theme changes, and card state changes
// not inside of a ref because the scope does not depend on state or props
const videos = projects.reduce((acc, p) => {
  acc[p.name] = <Video src={p.src} />
  return acc
}, {} as any)

export const Projects = () => {
  useTheme()
  // when the theme changes, grab a new set of svgs
  const svgs = Svgs(24)

  return (
    <Content>
      {projects.map((p) => (
        <Project
          key={p.name}
          name={p.name}
          shortDescription={p.shortDescription}
          longDescription={p.longDescription}
          deploymentSrc={p.deploymentSrc}
          repoSrc={p.repoSrc}
          video={videos[p.name]}
          svgs={p.svgs.map((s) => svgs[s])}
        />
      ))}
    </Content>
  )
}