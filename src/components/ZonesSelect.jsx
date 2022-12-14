import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getZonesAsync } from '../store/slices/main/async';
import {showZones} from './../store/slices/main/selectors';

function ZonesSelect() {

  const zones = useSelector(showZones);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getZonesAsync());
  }, [dispatch])

  return (
    <div>
      {zones.map(item => <p>{item.subzone}</p>)}
    </div>
  )
}

export default ZonesSelect
