import React from 'react'
import {Tabs} from 'antd';

const {TabPane} = Tabs;
function Profile(){
    return(
        <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1"></TabPane>
                <TabPane tab="Tab 2" key="2"></TabPane>
                <TabPane tab="Tab 3" key="3"></TabPane>
            </Tabs>
        </div>
    )
}
export default Profile