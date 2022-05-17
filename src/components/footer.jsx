import {
	Container, Text, Heading, Flex, Icon
} from '@chakra-ui/react'

import { 
	YoutubeLogo, FacebookLogo, InstagramLogo
} from 'phosphor-react'

export function Footer() {
	return(
		<Container
			as="footer"
			bg="brand.green.def"
			w="full"
			py="4rem"
			px="1.5rem"
			color="#f0f2f5"
			display="flex"
			flexDirection="column"
			items="center"
			content="flex-start"
			gap={6}
		>
			<Heading
				color="#f0f2f5"
				display="flex"
				fontWeight="400"
			>
				Doctor
				<Text fontWeight="700">Care</Text>
			</Heading>
			<Text>©2022 - NextLevelWeek Return</Text>
			<Text>All rights reserved.</Text>
			<Flex gap={4}>
				<Icon as={InstagramLogo} h={8} w={8} />
				<Icon as={FacebookLogo} h={8} w={8} />
				<Icon as={YoutubeLogo} h={8} w={8} />
			</Flex>
		</Container>
	)
}