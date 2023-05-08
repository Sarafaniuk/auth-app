import CrossIcon from '../../icons/CrossIcon'
import { FC } from 'react'
import { ValidateResult } from 'react-hook-form'

interface Props {
	text: ValidateResult
}
const ValidationError: FC<Props> = ({ text }) => {
	return (
		<div className='custom_error'>
			<div>
				<CrossIcon />
			</div>
			<span>{text}</span>
		</div>
	)
}

export default ValidationError
