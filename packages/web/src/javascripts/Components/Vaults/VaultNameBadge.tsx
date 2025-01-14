import { FunctionComponent } from 'react'
import Icon from '../Icon/Icon'
import { VaultListingInterface } from '@standardnotes/snjs'

type Props = {
  vault: VaultListingInterface
}

const VaultNameBadge: FunctionComponent<Props> = ({ vault }) => {
  return (
    <div
      title="Vault name"
      className="flex items-center rounded bg-success px-1.5 py-1 text-success-contrast select-none"
    >
      <Icon
        ariaLabel="Shared in vault"
        type={vault.iconString}
        className="mr-1 text-info-contrast"
        size="medium"
        emojiSize="small"
      />
      <span className="mr-auto overflow-hidden text-ellipsis text-xs">{vault.name}</span>
    </div>
  )
}

export default VaultNameBadge
