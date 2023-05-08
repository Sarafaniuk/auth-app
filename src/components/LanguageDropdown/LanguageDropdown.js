import React from 'react'
import { Select, Space } from 'antd';
import i18n from '../../i18n/i18n'


const LanguageDropdown = () => {

    const languages = [
        { value: 'ru', label: 'Русский',},
        { value: 'en', label: 'English',},
        { value: 'ua', label: 'Українский',},
    ]

    const defaultLanguage  = () => {
      return languages.find(lang => lang.value === localStorage.getItem('i18n'))
    }

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18n', lang);
    };


    return (
        <Space wrap>
            <Select
                defaultValue={defaultLanguage}
                style={{
                    width: 120,
                }}
                onChange={changeLanguage}
                options={languages}
            />
        </Space>
    )
}

export default LanguageDropdown
