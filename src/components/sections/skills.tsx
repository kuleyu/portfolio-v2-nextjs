import {Element} from 'react-scroll'
import {SectionHeader} from '../section_header'
import {Const} from '../../const'
import {CardRows} from '../card_rows'
import {Skill} from '../card_content/skill'
import {PortfolioContext} from '../../pages'
import {useContext} from 'react'

export const SkillsSection = () => {
  const portfolio = useContext(PortfolioContext)

  return (
    <Element name={portfolio.titles.tech} key={portfolio.titles.tech}>
      <SectionHeader
        title={portfolio.titles.tech}
        subTitle={portfolio.subTitles.tech}
      />
      <CardRows
        items={portfolio.skills}
        hasSvgs={true}
        getCell={(t, getSvg) => (
          <Skill name={t.name} svgs={t.svgKeys.map((s) => getSvg(s))} />
        )}
      />
    </Element>
  )
}