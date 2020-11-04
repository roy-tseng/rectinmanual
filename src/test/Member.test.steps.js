import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Member from '../components/Member/Member'

const feature = loadFeature('../features/member/member.feature');

defineFeature(feature, test => {
  test('設定會員名稱', ({ given, when, then }) => {
    
    let testInstance = null;

    given('name', () => {
      const testRenderer = TestRenderer.create(<Member />);
      testInstance = testRenderer.root;
    });

    when('會員登入系統', () => {
      // INITIALLY
    });

    then('顯示會員登入名稱', () => {
      const divInstance = testInstance.findByProps({ name: 'roy@infolink.com.tw' });
      expect(divInstance.props.children).toBe('roy@infolink.com.tw');
    });
  });  
});