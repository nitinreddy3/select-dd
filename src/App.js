import React, { useState } from 'react'
import { Modal, Button, Select, Layout, Row, Col } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

const { Option } = Select;

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const tagRender = tag => {
    return (
      <span>
        {tag}
        <Button type="link" onClick={() => { }}>
          Delete
        </Button>
      </span>
    );
  };


  return (
    <>
      <Layout>
        <Header>Select dropdown</Header>
        <Content>
          <Row>
            <Col span={12} offset={6}>
              <Button type="primary" onClick={showModal}>
                Open Modal
              </Button>
              <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['a10', 'c12']}
                  onChange={handleChange}
                  tagRender={tagRender}
                >
                  {children}
                </Select>
              </Modal>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default App;
