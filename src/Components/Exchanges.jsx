import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetCryptoMarketsQuery } from "../Services/cryptoApi";

const { Text } = Typography;
const { Panel } = Collapse;

const Markets = () => {
  const { data, isFetching } = useGetCryptoMarketsQuery();
  const marketsList = data?.data?.markets;

  if (isFetching) return "Loading...";

  return (
    <>
      <Row>
        <Col span={6}>Markets</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>BTC Price</Col>
        <Col span={6}>Market Share</Col>
      </Row>
      <Row>
        {marketsList.map((market) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={market.uuid}
                showArrow={false}
                header={
                  <Row key={market.uuid} style={{width:"100%"}}>
                    <Col span={6}>
                      <Text>
                        <strong>{market.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={market.exchange.iconUrl}
                      />
                      <Text>
                        <strong>{market.exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(market["24hVolume"])}</Col>
                    <Col span={6}>{millify(market.price)}$</Col>
                    <Col span={6}>{millify(market.marketShare)}%</Col>
                  </Row>
                }
              >
               
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Markets;
