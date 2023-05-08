import {Tabs, TabsProps} from 'antd';
import {FC} from "react";

interface Props {
    items: TabsProps['items'],
}


const Tab: FC<Props> = ({items}) => <Tabs defaultActiveKey="1" items={items} />;

export default Tab;