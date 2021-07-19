import { Dialog, DialogTitle, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { ProviderNames, ProviderType } from '../../providers'
import { getProvider } from '../../redux/slices'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      paddingBottom: '0px'
    },
    list: {
      minWidth: '20rem'
    },
    item: {
      textAlign: 'left',
      borderTop: '1px dashed black'
    }
  })
)

export interface ProvidersDialogProps {
  open: boolean;
  onClose: (value: ProviderType) => void;
}

const ProvidersDialog = ({ open, onClose }: ProvidersDialogProps) => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const providerName: ProviderType = useAppSelector(getProvider)

  const handleClose = () => {
    onClose(providerName)
  }

  const onClick = (name: ProviderType) => () => {
    onClose(name)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className={classes.title}>Connect a Wallet</DialogTitle>

      <List className={classes.list}>
        { Object.keys(ProviderNames).map(name => (
          <ListItem button onClick={onClick(name)} key={name} className={classes.item}>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default ProvidersDialog
