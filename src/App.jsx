import React, { useState, useEffect } from 'react';
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
} from '@chakra-ui/react';

// Mock data for the initial version (replace with backend data later if needed)
const mockData = [
  { name: 'Distributor A', ytdShipments: 12000, lastMonthShipments: 950, forecastedShipments: 1100 },
  { name: 'Distributor B', ytdShipments: 15500, lastMonthShipments: 1200, forecastedShipments: 1300 },
  { name: 'Distributor C', ytdShipments: 9000, lastMonthShipments: 800, forecastedShipments: 1000 },
];

const App = () => {
  const [data, setData] = useState(mockData);
  const [sortType, setSortType] = useState('ytdShipments');

  // Sort the data whenever sortType changes
  useEffect(() => {
    const sortedData = [...mockData].sort((a, b) => b[sortType] - a[sortType]);
    setData(sortedData);
  }, [sortType]);

  return (
    <Container maxW="container.lg" mt={10}>
      <Heading mb={5}>Augur Supply Chain Dashboard</Heading>

      <Select mb={5} value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="ytdShipments">Year-to-Date Shipments</option>
        <option value="lastMonthShipments">Last Month's Shipments</option>
        <option value="forecastedShipments">Forecasted Shipments</option>
      </Select>

      <Box border="1px solid #e2e8f0" borderRadius="10px" overflow="hidden">
        <Table variant="striped" colorScheme="blue">
          <Thead bg="blue.500">
            <Tr>
              <Th color="white">Distributor Name</Th>
              <Th color="white">Year-to-Date Shipments</Th>
              <Th color="white">Last Month's Shipments</Th>
              <Th color="white">Forecasted Shipments</Th>
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
  );
};

export default App;
