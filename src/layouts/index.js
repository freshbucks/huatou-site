import { Layout, Row, Col } from 'antd';
import styles from './index.css';

const { Header, Content, Footer } = Layout;

function BasicLayout(props) {
  return (
    <Layout className={styles.normal}>
      <Header className={styles.header}>Header</Header>
      <Content>{props.children}</Content>
      <Footer className={styles.footer}>
        <div className="xl-container">
          <div className={styles.inner}>
            <Row gutter={24}>
              <Col span={12}>
                <Col span={6}>
                  <p>关于我们</p>
                  <a href={'#'}>企业简介</a>
                  <a href={'#'}>核心团队</a>
                  <a href={'#'}>投资机构</a>
                  <a href={'#'}>社会荣誉</a>
                </Col>
                <Col span={6}>
                  <dl>
                    <dt>企业文化</dt>
                    <dd>核心理念</dd>
                    <dd>团队建设</dd>
                    <dd>投资机构</dd>
                  </dl>
                </Col>
                <Col span={6}>
                  <dl>
                    <dt>公司动态</dt>
                    <dd>企业公告</dd>
                    <dd>媒体报道</dd>
                    <dd>行业动态</dd>
                  </dl>
                </Col>
                <Col span={6}>
                  <dl>
                    <dt>加入我们</dt>
                    <dd>商务合作</dd>
                    <dd>供应商招募</dd>
                    <dd>团长招募</dd>
                    <dd>人才招聘</dd>
                  </dl>
                </Col>
              </Col>
              <Col span={12} style={{borderLeft: '1px solid #666'}}>
                <Col span={8} offset={2}>
                  <dl>
                    <dt>关于我们</dt>
                    <dd>企业简介</dd>
                    <dd>核心团队</dd>
                    <dd>投资机构</dd>
                    <dd>社会荣誉</dd>
                    <dd>核心团队</dd>
                    <dd>投资机构</dd>
                    <dd>社会荣誉</dd>
                  </dl>
                </Col>
                <Col span={14}>
                  <dl>
                    <dt>企业文化</dt>
                    <dd>核心理念</dd>
                    <dd>团队建设</dd>
                    <dd>投资机构</dd>
                  </dl>
                </Col>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className="xl-padding">
            Copyright &copy; 2019 青岛鲜旅电子商务有限公司 All Rights Reserved
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default BasicLayout;
