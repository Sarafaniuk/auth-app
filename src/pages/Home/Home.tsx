import {FC} from 'react'
import {withTranslation, WithTranslation} from 'react-i18next'

interface IProps extends WithTranslation {}

const Home: FC<IProps> = ({ t }) => {


	return (
		<div>
			Welcome home
		</div>
	);
};

export default withTranslation()(Home);
