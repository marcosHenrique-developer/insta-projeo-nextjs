/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FaqScreen from '../src/components/commons/FaqScreen';

export default function Faq(props) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <FaqScreen {...props} />
  );
}
export async function getStaticProps() {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  ).then(async (res) => {
    const response = await res.json();
    return response.data;
  });
  return {
    props: {
      faqCategories,
    },
  };
}
