import {v4} from 'uuid'
import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'
import {ItemGrid} from './item_grid'

export const IconCard = ({
  children,
  title,
}: {
  children: JSX.Element[]
  title: string
}) => {
  const theme = useTheme.getState().theme

  return (
    <div
      key={v4()}
      style={{
        WebkitBoxShadow: theme.shadow,
        MozBoxShadow: theme.shadow,
        boxShadow: theme.shadow,
        padding: theme.pad.l / 2,
        marginTop: theme.pad.l,
        backgroundColor: theme.background1,
        borderRadius: theme.rad.card,
        maxWidth: Const.maxWidth,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          color: theme.fontColor1,
          fontSize: theme.fontSizes.lg,
        }}
      >
        {title}
      </div>
      <ItemGrid
        items={children}
        outerStyle={{}}
        getCell={(child) => {
          return (
            <div
              key={v4()}
              style={{
                padding: 5,
              }}
            >
              {child}
            </div>
          )
        }}
      />
    </div>
  )
}
