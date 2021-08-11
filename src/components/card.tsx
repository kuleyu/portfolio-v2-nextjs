import {Grid} from 'antd'
import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'

export const Card = ({
  children,
  style,
}: {
  children: JSX.Element | JSX.Element[]
  style?: any
}) => {
  const theme = useTheme()
  const md = Grid.useBreakpoint().md

  return (
    <div
      style={{
        WebkitBoxShadow: theme.shadow,
        MozBoxShadow: theme.shadow,
        boxShadow: theme.shadow,
        padding: Const.pad,
        marginTop: Const.pad,
        backgroundColor: theme.background1,
        borderRadius: md ? Const.rad : 0,
        ...style,
      }}
    >
      {children}
    </div>
  )
}