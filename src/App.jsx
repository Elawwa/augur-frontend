import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
  Heading,
  Select,
} from "@chakra-ui/react";

const mockData = [
  { name: "Distributor A", ytdShipments: 12000, lastMonthShipments: 950, forecastedShipments: 1100 },
  { name: "Distributor B", ytdShipments: 15500, lastMonthShipments: 1200, forecastedShipments: 1300 },
  { name: "Distributor C", ytdShipments: 9000, lastMonthShipments: 800, forecastedShipments: 1000 }
];

const Dashboard = () => {
  const [data, setData] = useState(mockData);
  const [sortType, setSortType] = useState("ytdShipments");

  useEffect(() => {
    const sortedData = [...mockData].sort((a, b) => b[sortType] - a[sortType]);
    setData(sortedData);
  }, [sortType]);

  return (
    <ChakraProvider>
      <Container maxW="container.lg" mt={5}>
        <Heading mb={4}>Augur Supply Chain Dashboard</Heading>
        <Select mb={4} value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="ytdShipments">Year-to-Date Shipments</option>
          <option value="lastMonthShipments">Last Month's Shipments</option>
          <option value="forecastedShipments">Forecasted Shipments</option>
        </Select>
        <Box border="1px solid #ccc" borderRadius="10px" p={4}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Distributor Name</Th>
                <Th>Year-to-Date Shipments</Th>
                <Th>Last Month's Shipments</Th>
                <Th>Forecasted Shipments</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((dist, index) => (
                <Tr key={index}>
                  <Td>{dist.name}</Td>
                  <Td>{dist.ytdShipments}</Td>
                  <Td>{dist.lastMonthShipments}</Td>
                  <Td>{dist.forecastedShipments}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default Dashboard;
