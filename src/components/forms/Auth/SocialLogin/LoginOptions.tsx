import { FC } from 'react';
import './LoginOptions.less';
import GoogleIcon from '../../../icons/GoogleIcon';
import FacebookIcon from '../../../icons/FacebookIcon';
import InIcon from '../../../icons/InIcon';
import {WithTranslation, withTranslation} from 'react-i18next'

interface Icon {
    key: number;
    img: React.ReactElement;
}
interface IProps extends WithTranslation {}

const icons: Icon[] = [
    {
        key: 1,
        img: <GoogleIcon />,
    },
    {
        key: 2,
        img: <FacebookIcon />,
    },
    {
        key: 3,
        img: <InIcon />,
    },
];

const LoginOptions: FC<IProps> = ( {t}) => {


    return (
        <div className='auth__options'>
            <p className='auth__title'>{t('Или войдите с помощью')}</p>

            <div className='auth__list'>
                {icons.map(({img, key}) => (
                    <div className='auth__card' key={key}>
                        {img}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default withTranslation()(LoginOptions);
