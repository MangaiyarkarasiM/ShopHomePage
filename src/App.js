import React, {useState} from 'react';
import Products from './Components/Products';
import Header from './Components/Header';
import Modal from './Components/Modal';
import CartItem from './Components/CartItem';

const products = [
  {
    id: 1,
    title: 'Fancy Product',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAclBMVEXMzMwAAADR0dHS0tLV1dW3t7elpaWIiIjAwMCwsLDLy8tbW1t3d3d8fHy/v7/ExMSVlZU6OjoeHh6np6dnZ2ckJCRvb29KSkpVVVWYmJiNjY0XFxcSEhJFRUUrKyuWlpYiIiIzMzNHR0dpaWk+Pj4LCwsebs21AAAE4UlEQVR4nO3Za5eiOBAGYKoSRECIFwSvjHa3//8vbgUEEnBn17M9O8w57/Ohu40YoaxUSjoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/nzs6UeVYP9AO8KT1/+LdxjP4k/MPHmr34wj1ylpxoI4Kr6+img5nCqHWXr9yHbq7XcIs3CYJZZZqiIK+2k4WKyqa3rK35/4l9HkaWJyuhFVn8WdKOrOlAuiQyk/KvPmR8o1LZ4v4bwiSlel/Pzsng33dP60I9GcgjJQt9KeWE5lqCWftTlQ1p4pVxTZFNcL2pq3plcSxy4mOV12Wsk8fKJNM8Yh7WN5L52UVM4oKD21atMkWXZnp6+0bJ7J6NiOqZjSd86dFxR1MVEpdYtRLehk/+Tb5Zl3uuxDNyfL9jwdHLdDCVX6OaQzCscv/AlD5bK7WKaymyXQm0pCy+shELzdzC9RVLqdjBkq2lOP+2glXpL7O8h0zk0ty6OPSdQfoQ5X+Zu/6mGnO70V7P9HSD8mF5Vs7UrxoqWqu7MbrfPhgVqPL0rWXOjGpOjzRN3txElXr6xpmv526nCbnpJpkoLrajh1ztoa00ik5Hav0scmqRx26algiElJ3cFqZwflebeGbA9zWzzxizThHR25+Tid1Di6OW7O5+d1qvWk+iaPgw6GmATJZd+Ub9Yx2WdkTebD0ZKAM4uJTml6Rrog+ytxs1ritHMeLS9tpqgjpaOYyj5j9+3Q6U9qynKl47TtT6SEeIfvv+dSvs3L1ZzTqm1Y1s5zcZM7HTaXs+ywepolEqWmMofOAtHHm+0Mr3lTWGQZuscXl/dan19NepPpCfH10QyGo5i4jyQosnyklkzalvBZQJ2Y8GLz+MqKmjbNkCq9mJSPecUkedFG6q7b+lmeNJlSn6Yh0ffn/uTERLrhXEsfK4snDeaeJ7Ky8/GY5P6qvVDz9/WkGUnkW4wOfJJ4z+1p2Hc2W/OMnG6qD0dzrifebvscGrp4f99ZjHsrCR7Vo6+GdsdqwyT9SRtD25QNPVtE8eiTUIdZ7Ts8Xg/N0Ec/dD54/YmfUlJeC6kpS28CQ1UYt450kp8mUFcv7hJnCa/bn+xn1Z+ogkYjEpKr04jfnGPT2rt625doNtuLF5QdjRyZa7el44c8Mm4CGqf1nwGmT/8jkj7zw3l67S4Xv1tV7Y4ju8/WXT5J2FvQOg9DE/DdrcNsizp/Dd/7pBeMv+t6vgEfne94lu023KJphofq5J26XThtr2HOfqb0k3f1RKVnpyo1O7oU2b5e872e1dI5+BVfCqC/M8sm8rzpyIau7qc9tGp2+Uz2LqvbdyQMWRdZDjbtvZpH94VSNv7pd4vfyPgh4E86aXujrdEMJXfZRphZh2evwiZOX8Lm8fJ2U78XS4v2aewsSoebdlC2py87pCQks6qw3u2RZmN5XDedQzuYVFSvsuxKdeh9mrn7yCSvph96NrlwqrIoWtW0feadFC46ZFH5oGJOWRLwj9Jr1hcrR9SPFnvapscXN47+wbLsCzSbU7p90L04Jn0ZMdHH5XEv4zllSWD/wzJ6+Po/PvYu9n/9/04ziz9NMzSrJAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgWfwFLyzCJlWZyEQAAAABJRU5ErkJggg==',
    price: {
      specialPrice: false,
      oldPrice: '',
      currentPrice: '$40.00 - $80.00'
    },
    rating: ''
  },
  {
    id: 2,
    title: 'Special Item',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAclBMVEXMzMwAAADR0dHS0tLV1dW3t7elpaWIiIjAwMCwsLDLy8tbW1t3d3d8fHy/v7/ExMSVlZU6OjoeHh6np6dnZ2ckJCRvb29KSkpVVVWYmJiNjY0XFxcSEhJFRUUrKyuWlpYiIiIzMzNHR0dpaWk+Pj4LCwsebs21AAAE4UlEQVR4nO3Za5eiOBAGYKoSRECIFwSvjHa3//8vbgUEEnBn17M9O8w57/Ohu40YoaxUSjoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/nzs6UeVYP9AO8KT1/+LdxjP4k/MPHmr34wj1ylpxoI4Kr6+img5nCqHWXr9yHbq7XcIs3CYJZZZqiIK+2k4WKyqa3rK35/4l9HkaWJyuhFVn8WdKOrOlAuiQyk/KvPmR8o1LZ4v4bwiSlel/Pzsng33dP60I9GcgjJQt9KeWE5lqCWftTlQ1p4pVxTZFNcL2pq3plcSxy4mOV12Wsk8fKJNM8Yh7WN5L52UVM4oKD21atMkWXZnp6+0bJ7J6NiOqZjSd86dFxR1MVEpdYtRLehk/+Tb5Zl3uuxDNyfL9jwdHLdDCVX6OaQzCscv/AlD5bK7WKaymyXQm0pCy+shELzdzC9RVLqdjBkq2lOP+2glXpL7O8h0zk0ty6OPSdQfoQ5X+Zu/6mGnO70V7P9HSD8mF5Vs7UrxoqWqu7MbrfPhgVqPL0rWXOjGpOjzRN3txElXr6xpmv526nCbnpJpkoLrajh1ztoa00ik5Hav0scmqRx26algiElJ3cFqZwflebeGbA9zWzzxizThHR25+Tid1Di6OW7O5+d1qvWk+iaPgw6GmATJZd+Ub9Yx2WdkTebD0ZKAM4uJTml6Rrog+ytxs1ritHMeLS9tpqgjpaOYyj5j9+3Q6U9qynKl47TtT6SEeIfvv+dSvs3L1ZzTqm1Y1s5zcZM7HTaXs+ywepolEqWmMofOAtHHm+0Mr3lTWGQZuscXl/dan19NepPpCfH10QyGo5i4jyQosnyklkzalvBZQJ2Y8GLz+MqKmjbNkCq9mJSPecUkedFG6q7b+lmeNJlSn6Yh0ffn/uTERLrhXEsfK4snDeaeJ7Ky8/GY5P6qvVDz9/WkGUnkW4wOfJJ4z+1p2Hc2W/OMnG6qD0dzrifebvscGrp4f99ZjHsrCR7Vo6+GdsdqwyT9SRtD25QNPVtE8eiTUIdZ7Ts8Xg/N0Ec/dD54/YmfUlJeC6kpS28CQ1UYt450kp8mUFcv7hJnCa/bn+xn1Z+ogkYjEpKr04jfnGPT2rt625doNtuLF5QdjRyZa7el44c8Mm4CGqf1nwGmT/8jkj7zw3l67S4Xv1tV7Y4ju8/WXT5J2FvQOg9DE/DdrcNsizp/Dd/7pBeMv+t6vgEfne94lu023KJphofq5J26XThtr2HOfqb0k3f1RKVnpyo1O7oU2b5e872e1dI5+BVfCqC/M8sm8rzpyIau7qc9tGp2+Uz2LqvbdyQMWRdZDjbtvZpH94VSNv7pd4vfyPgh4E86aXujrdEMJXfZRphZh2evwiZOX8Lm8fJ2U78XS4v2aewsSoebdlC2py87pCQks6qw3u2RZmN5XDedQzuYVFSvsuxKdeh9mrn7yCSvph96NrlwqrIoWtW0feadFC46ZFH5oGJOWRLwj9Jr1hcrR9SPFnvapscXN47+wbLsCzSbU7p90L04Jn0ZMdHH5XEv4zllSWD/wzJ6+Po/PvYu9n/9/04ziz9NMzSrJAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgWfwFLyzCJlWZyEQAAAABJRU5ErkJggg==',
    price: {
      specialPrice: true,
      oldPrice: '$20.00',
      currentPrice: '$18.00'
    },
    rating: '5'
  },
  {
    id: 3,
    title: 'Sale Item',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAclBMVEXMzMwAAADR0dHS0tLV1dW3t7elpaWIiIjAwMCwsLDLy8tbW1t3d3d8fHy/v7/ExMSVlZU6OjoeHh6np6dnZ2ckJCRvb29KSkpVVVWYmJiNjY0XFxcSEhJFRUUrKyuWlpYiIiIzMzNHR0dpaWk+Pj4LCwsebs21AAAE4UlEQVR4nO3Za5eiOBAGYKoSRECIFwSvjHa3//8vbgUEEnBn17M9O8w57/Ohu40YoaxUSjoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/nzs6UeVYP9AO8KT1/+LdxjP4k/MPHmr34wj1ylpxoI4Kr6+img5nCqHWXr9yHbq7XcIs3CYJZZZqiIK+2k4WKyqa3rK35/4l9HkaWJyuhFVn8WdKOrOlAuiQyk/KvPmR8o1LZ4v4bwiSlel/Pzsng33dP60I9GcgjJQt9KeWE5lqCWftTlQ1p4pVxTZFNcL2pq3plcSxy4mOV12Wsk8fKJNM8Yh7WN5L52UVM4oKD21atMkWXZnp6+0bJ7J6NiOqZjSd86dFxR1MVEpdYtRLehk/+Tb5Zl3uuxDNyfL9jwdHLdDCVX6OaQzCscv/AlD5bK7WKaymyXQm0pCy+shELzdzC9RVLqdjBkq2lOP+2glXpL7O8h0zk0ty6OPSdQfoQ5X+Zu/6mGnO70V7P9HSD8mF5Vs7UrxoqWqu7MbrfPhgVqPL0rWXOjGpOjzRN3txElXr6xpmv526nCbnpJpkoLrajh1ztoa00ik5Hav0scmqRx26algiElJ3cFqZwflebeGbA9zWzzxizThHR25+Tid1Di6OW7O5+d1qvWk+iaPgw6GmATJZd+Ub9Yx2WdkTebD0ZKAM4uJTml6Rrog+ytxs1ritHMeLS9tpqgjpaOYyj5j9+3Q6U9qynKl47TtT6SEeIfvv+dSvs3L1ZzTqm1Y1s5zcZM7HTaXs+ywepolEqWmMofOAtHHm+0Mr3lTWGQZuscXl/dan19NepPpCfH10QyGo5i4jyQosnyklkzalvBZQJ2Y8GLz+MqKmjbNkCq9mJSPecUkedFG6q7b+lmeNJlSn6Yh0ffn/uTERLrhXEsfK4snDeaeJ7Ky8/GY5P6qvVDz9/WkGUnkW4wOfJJ4z+1p2Hc2W/OMnG6qD0dzrifebvscGrp4f99ZjHsrCR7Vo6+GdsdqwyT9SRtD25QNPVtE8eiTUIdZ7Ts8Xg/N0Ec/dD54/YmfUlJeC6kpS28CQ1UYt450kp8mUFcv7hJnCa/bn+xn1Z+ogkYjEpKr04jfnGPT2rt625doNtuLF5QdjRyZa7el44c8Mm4CGqf1nwGmT/8jkj7zw3l67S4Xv1tV7Y4ju8/WXT5J2FvQOg9DE/DdrcNsizp/Dd/7pBeMv+t6vgEfne94lu023KJphofq5J26XThtr2HOfqb0k3f1RKVnpyo1O7oU2b5e872e1dI5+BVfCqC/M8sm8rzpyIau7qc9tGp2+Uz2LqvbdyQMWRdZDjbtvZpH94VSNv7pd4vfyPgh4E86aXujrdEMJXfZRphZh2evwiZOX8Lm8fJ2U78XS4v2aewsSoebdlC2py87pCQks6qw3u2RZmN5XDedQzuYVFSvsuxKdeh9mrn7yCSvph96NrlwqrIoWtW0feadFC46ZFH5oGJOWRLwj9Jr1hcrR9SPFnvapscXN47+wbLsCzSbU7p90L04Jn0ZMdHH5XEv4zllSWD/wzJ6+Po/PvYu9n/9/04ziz9NMzSrJAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgWfwFLyzCJlWZyEQAAAABJRU5ErkJggg==',
    price: {
      specialPrice: true,
      oldPrice: '$50.00',
      currentPrice: '$25.00'
    },
    rating: ''
  },
  {
    id: 4,
    title: 'Popular Item',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAclBMVEXMzMwAAADR0dHS0tLV1dW3t7elpaWIiIjAwMCwsLDLy8tbW1t3d3d8fHy/v7/ExMSVlZU6OjoeHh6np6dnZ2ckJCRvb29KSkpVVVWYmJiNjY0XFxcSEhJFRUUrKyuWlpYiIiIzMzNHR0dpaWk+Pj4LCwsebs21AAAE4UlEQVR4nO3Za5eiOBAGYKoSRECIFwSvjHa3//8vbgUEEnBn17M9O8w57/Ohu40YoaxUSjoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/nzs6UeVYP9AO8KT1/+LdxjP4k/MPHmr34wj1ylpxoI4Kr6+img5nCqHWXr9yHbq7XcIs3CYJZZZqiIK+2k4WKyqa3rK35/4l9HkaWJyuhFVn8WdKOrOlAuiQyk/KvPmR8o1LZ4v4bwiSlel/Pzsng33dP60I9GcgjJQt9KeWE5lqCWftTlQ1p4pVxTZFNcL2pq3plcSxy4mOV12Wsk8fKJNM8Yh7WN5L52UVM4oKD21atMkWXZnp6+0bJ7J6NiOqZjSd86dFxR1MVEpdYtRLehk/+Tb5Zl3uuxDNyfL9jwdHLdDCVX6OaQzCscv/AlD5bK7WKaymyXQm0pCy+shELzdzC9RVLqdjBkq2lOP+2glXpL7O8h0zk0ty6OPSdQfoQ5X+Zu/6mGnO70V7P9HSD8mF5Vs7UrxoqWqu7MbrfPhgVqPL0rWXOjGpOjzRN3txElXr6xpmv526nCbnpJpkoLrajh1ztoa00ik5Hav0scmqRx26algiElJ3cFqZwflebeGbA9zWzzxizThHR25+Tid1Di6OW7O5+d1qvWk+iaPgw6GmATJZd+Ub9Yx2WdkTebD0ZKAM4uJTml6Rrog+ytxs1ritHMeLS9tpqgjpaOYyj5j9+3Q6U9qynKl47TtT6SEeIfvv+dSvs3L1ZzTqm1Y1s5zcZM7HTaXs+ywepolEqWmMofOAtHHm+0Mr3lTWGQZuscXl/dan19NepPpCfH10QyGo5i4jyQosnyklkzalvBZQJ2Y8GLz+MqKmjbNkCq9mJSPecUkedFG6q7b+lmeNJlSn6Yh0ffn/uTERLrhXEsfK4snDeaeJ7Ky8/GY5P6qvVDz9/WkGUnkW4wOfJJ4z+1p2Hc2W/OMnG6qD0dzrifebvscGrp4f99ZjHsrCR7Vo6+GdsdqwyT9SRtD25QNPVtE8eiTUIdZ7Ts8Xg/N0Ec/dD54/YmfUlJeC6kpS28CQ1UYt450kp8mUFcv7hJnCa/bn+xn1Z+ogkYjEpKr04jfnGPT2rt625doNtuLF5QdjRyZa7el44c8Mm4CGqf1nwGmT/8jkj7zw3l67S4Xv1tV7Y4ju8/WXT5J2FvQOg9DE/DdrcNsizp/Dd/7pBeMv+t6vgEfne94lu023KJphofq5J26XThtr2HOfqb0k3f1RKVnpyo1O7oU2b5e872e1dI5+BVfCqC/M8sm8rzpyIau7qc9tGp2+Uz2LqvbdyQMWRdZDjbtvZpH94VSNv7pd4vfyPgh4E86aXujrdEMJXfZRphZh2evwiZOX8Lm8fJ2U78XS4v2aewsSoebdlC2py87pCQks6qw3u2RZmN5XDedQzuYVFSvsuxKdeh9mrn7yCSvph96NrlwqrIoWtW0feadFC46ZFH5oGJOWRLwj9Jr1hcrR9SPFnvapscXN47+wbLsCzSbU7p90L04Jn0ZMdHH5XEv4zllSWD/wzJ6+Po/PvYu9n/9/04ziz9NMzSrJAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgWfwFLyzCJlWZyEQAAAABJRU5ErkJggg==',
    price: {
      specialPrice: false,
      oldPrice: '',
      currentPrice: '$40.00'
    },
    rating: '5'
  },
  {
    id: 5,
    title: 'Sale Item',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAclBMVEXMzMwAAADR0dHS0tLV1dW3t7elpaWIiIjAwMCwsLDLy8tbW1t3d3d8fHy/v7/ExMSVlZU6OjoeHh6np6dnZ2ckJCRvb29KSkpVVVWYmJiNjY0XFxcSEhJFRUUrKyuWlpYiIiIzMzNHR0dpaWk+Pj4LCwsebs21AAAE4UlEQVR4nO3Za5eiOBAGYKoSRECIFwSvjHa3//8vbgUEEnBn17M9O8w57/Ohu40YoaxUSjoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/nzs6UeVYP9AO8KT1/+LdxjP4k/MPHmr34wj1ylpxoI4Kr6+img5nCqHWXr9yHbq7XcIs3CYJZZZqiIK+2k4WKyqa3rK35/4l9HkaWJyuhFVn8WdKOrOlAuiQyk/KvPmR8o1LZ4v4bwiSlel/Pzsng33dP60I9GcgjJQt9KeWE5lqCWftTlQ1p4pVxTZFNcL2pq3plcSxy4mOV12Wsk8fKJNM8Yh7WN5L52UVM4oKD21atMkWXZnp6+0bJ7J6NiOqZjSd86dFxR1MVEpdYtRLehk/+Tb5Zl3uuxDNyfL9jwdHLdDCVX6OaQzCscv/AlD5bK7WKaymyXQm0pCy+shELzdzC9RVLqdjBkq2lOP+2glXpL7O8h0zk0ty6OPSdQfoQ5X+Zu/6mGnO70V7P9HSD8mF5Vs7UrxoqWqu7MbrfPhgVqPL0rWXOjGpOjzRN3txElXr6xpmv526nCbnpJpkoLrajh1ztoa00ik5Hav0scmqRx26algiElJ3cFqZwflebeGbA9zWzzxizThHR25+Tid1Di6OW7O5+d1qvWk+iaPgw6GmATJZd+Ub9Yx2WdkTebD0ZKAM4uJTml6Rrog+ytxs1ritHMeLS9tpqgjpaOYyj5j9+3Q6U9qynKl47TtT6SEeIfvv+dSvs3L1ZzTqm1Y1s5zcZM7HTaXs+ywepolEqWmMofOAtHHm+0Mr3lTWGQZuscXl/dan19NepPpCfH10QyGo5i4jyQosnyklkzalvBZQJ2Y8GLz+MqKmjbNkCq9mJSPecUkedFG6q7b+lmeNJlSn6Yh0ffn/uTERLrhXEsfK4snDeaeJ7Ky8/GY5P6qvVDz9/WkGUnkW4wOfJJ4z+1p2Hc2W/OMnG6qD0dzrifebvscGrp4f99ZjHsrCR7Vo6+GdsdqwyT9SRtD25QNPVtE8eiTUIdZ7Ts8Xg/N0Ec/dD54/YmfUlJeC6kpS28CQ1UYt450kp8mUFcv7hJnCa/bn+xn1Z+ogkYjEpKr04jfnGPT2rt625doNtuLF5QdjRyZa7el44c8Mm4CGqf1nwGmT/8jkj7zw3l67S4Xv1tV7Y4ju8/WXT5J2FvQOg9DE/DdrcNsizp/Dd/7pBeMv+t6vgEfne94lu023KJphofq5J26XThtr2HOfqb0k3f1RKVnpyo1O7oU2b5e872e1dI5+BVfCqC/M8sm8rzpyIau7qc9tGp2+Uz2LqvbdyQMWRdZDjbtvZpH94VSNv7pd4vfyPgh4E86aXujrdEMJXfZRphZh2evwiZOX8Lm8fJ2U78XS4v2aewsSoebdlC2py87pCQks6qw3u2RZmN5XDedQzuYVFSvsuxKdeh9mrn7yCSvph96NrlwqrIoWtW0feadFC46ZFH5oGJOWRLwj9Jr1hcrR9SPFnvapscXN47+wbLsCzSbU7p90L04Jn0ZMdHH5XEv4zllSWD/wzJ6+Po/PvYu9n/9/04ziz9NMzSrJAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgWfwFLyzCJlWZyEQAAAABJRU5ErkJggg==',
    price: {
      specialPrice: true,
      oldPrice: '$50.00',
      currentPrice: '$25.00'
    },
    rating: ''
  },
  {
    id: 6,
    title: 'Fancy Product',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAclBMVEXMzMwAAADR0dHS0tLV1dW3t7elpaWIiIjAwMCwsLDLy8tbW1t3d3d8fHy/v7/ExMSVlZU6OjoeHh6np6dnZ2ckJCRvb29KSkpVVVWYmJiNjY0XFxcSEhJFRUUrKyuWlpYiIiIzMzNHR0dpaWk+Pj4LCwsebs21AAAE4UlEQVR4nO3Za5eiOBAGYKoSRECIFwSvjHa3//8vbgUEEnBn17M9O8w57/Ohu40YoaxUSjoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/nzs6UeVYP9AO8KT1/+LdxjP4k/MPHmr34wj1ylpxoI4Kr6+img5nCqHWXr9yHbq7XcIs3CYJZZZqiIK+2k4WKyqa3rK35/4l9HkaWJyuhFVn8WdKOrOlAuiQyk/KvPmR8o1LZ4v4bwiSlel/Pzsng33dP60I9GcgjJQt9KeWE5lqCWftTlQ1p4pVxTZFNcL2pq3plcSxy4mOV12Wsk8fKJNM8Yh7WN5L52UVM4oKD21atMkWXZnp6+0bJ7J6NiOqZjSd86dFxR1MVEpdYtRLehk/+Tb5Zl3uuxDNyfL9jwdHLdDCVX6OaQzCscv/AlD5bK7WKaymyXQm0pCy+shELzdzC9RVLqdjBkq2lOP+2glXpL7O8h0zk0ty6OPSdQfoQ5X+Zu/6mGnO70V7P9HSD8mF5Vs7UrxoqWqu7MbrfPhgVqPL0rWXOjGpOjzRN3txElXr6xpmv526nCbnpJpkoLrajh1ztoa00ik5Hav0scmqRx26algiElJ3cFqZwflebeGbA9zWzzxizThHR25+Tid1Di6OW7O5+d1qvWk+iaPgw6GmATJZd+Ub9Yx2WdkTebD0ZKAM4uJTml6Rrog+ytxs1ritHMeLS9tpqgjpaOYyj5j9+3Q6U9qynKl47TtT6SEeIfvv+dSvs3L1ZzTqm1Y1s5zcZM7HTaXs+ywepolEqWmMofOAtHHm+0Mr3lTWGQZuscXl/dan19NepPpCfH10QyGo5i4jyQosnyklkzalvBZQJ2Y8GLz+MqKmjbNkCq9mJSPecUkedFG6q7b+lmeNJlSn6Yh0ffn/uTERLrhXEsfK4snDeaeJ7Ky8/GY5P6qvVDz9/WkGUnkW4wOfJJ4z+1p2Hc2W/OMnG6qD0dzrifebvscGrp4f99ZjHsrCR7Vo6+GdsdqwyT9SRtD25QNPVtE8eiTUIdZ7Ts8Xg/N0Ec/dD54/YmfUlJeC6kpS28CQ1UYt450kp8mUFcv7hJnCa/bn+xn1Z+ogkYjEpKr04jfnGPT2rt625doNtuLF5QdjRyZa7el44c8Mm4CGqf1nwGmT/8jkj7zw3l67S4Xv1tV7Y4ju8/WXT5J2FvQOg9DE/DdrcNsizp/Dd/7pBeMv+t6vgEfne94lu023KJphofq5J26XThtr2HOfqb0k3f1RKVnpyo1O7oU2b5e872e1dI5+BVfCqC/M8sm8rzpyIau7qc9tGp2+Uz2LqvbdyQMWRdZDjbtvZpH94VSNv7pd4vfyPgh4E86aXujrdEMJXfZRphZh2evwiZOX8Lm8fJ2U78XS4v2aewsSoebdlC2py87pCQks6qw3u2RZmN5XDedQzuYVFSvsuxKdeh9mrn7yCSvph96NrlwqrIoWtW0feadFC46ZFH5oGJOWRLwj9Jr1hcrR9SPFnvapscXN47+wbLsCzSbU7p90L04Jn0ZMdHH5XEv4zllSWD/wzJ6+Po/PvYu9n/9/04ziz9NMzSrJAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgWfwFLyzCJlWZyEQAAAABJRU5ErkJggg==',
    price: {
      specialPrice: false,
      oldPrice: '',
      currentPrice: '$40.00 - $80.00'
    },
    rating: ''
  },
  {
    id: 7,
    title: 'Special Item',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAclBMVEXMzMwAAADR0dHS0tLV1dW3t7elpaWIiIjAwMCwsLDLy8tbW1t3d3d8fHy/v7/ExMSVlZU6OjoeHh6np6dnZ2ckJCRvb29KSkpVVVWYmJiNjY0XFxcSEhJFRUUrKyuWlpYiIiIzMzNHR0dpaWk+Pj4LCwsebs21AAAE4UlEQVR4nO3Za5eiOBAGYKoSRECIFwSvjHa3//8vbgUEEnBn17M9O8w57/Ohu40YoaxUSjoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/nzs6UeVYP9AO8KT1/+LdxjP4k/MPHmr34wj1ylpxoI4Kr6+img5nCqHWXr9yHbq7XcIs3CYJZZZqiIK+2k4WKyqa3rK35/4l9HkaWJyuhFVn8WdKOrOlAuiQyk/KvPmR8o1LZ4v4bwiSlel/Pzsng33dP60I9GcgjJQt9KeWE5lqCWftTlQ1p4pVxTZFNcL2pq3plcSxy4mOV12Wsk8fKJNM8Yh7WN5L52UVM4oKD21atMkWXZnp6+0bJ7J6NiOqZjSd86dFxR1MVEpdYtRLehk/+Tb5Zl3uuxDNyfL9jwdHLdDCVX6OaQzCscv/AlD5bK7WKaymyXQm0pCy+shELzdzC9RVLqdjBkq2lOP+2glXpL7O8h0zk0ty6OPSdQfoQ5X+Zu/6mGnO70V7P9HSD8mF5Vs7UrxoqWqu7MbrfPhgVqPL0rWXOjGpOjzRN3txElXr6xpmv526nCbnpJpkoLrajh1ztoa00ik5Hav0scmqRx26algiElJ3cFqZwflebeGbA9zWzzxizThHR25+Tid1Di6OW7O5+d1qvWk+iaPgw6GmATJZd+Ub9Yx2WdkTebD0ZKAM4uJTml6Rrog+ytxs1ritHMeLS9tpqgjpaOYyj5j9+3Q6U9qynKl47TtT6SEeIfvv+dSvs3L1ZzTqm1Y1s5zcZM7HTaXs+ywepolEqWmMofOAtHHm+0Mr3lTWGQZuscXl/dan19NepPpCfH10QyGo5i4jyQosnyklkzalvBZQJ2Y8GLz+MqKmjbNkCq9mJSPecUkedFG6q7b+lmeNJlSn6Yh0ffn/uTERLrhXEsfK4snDeaeJ7Ky8/GY5P6qvVDz9/WkGUnkW4wOfJJ4z+1p2Hc2W/OMnG6qD0dzrifebvscGrp4f99ZjHsrCR7Vo6+GdsdqwyT9SRtD25QNPVtE8eiTUIdZ7Ts8Xg/N0Ec/dD54/YmfUlJeC6kpS28CQ1UYt450kp8mUFcv7hJnCa/bn+xn1Z+ogkYjEpKr04jfnGPT2rt625doNtuLF5QdjRyZa7el44c8Mm4CGqf1nwGmT/8jkj7zw3l67S4Xv1tV7Y4ju8/WXT5J2FvQOg9DE/DdrcNsizp/Dd/7pBeMv+t6vgEfne94lu023KJphofq5J26XThtr2HOfqb0k3f1RKVnpyo1O7oU2b5e872e1dI5+BVfCqC/M8sm8rzpyIau7qc9tGp2+Uz2LqvbdyQMWRdZDjbtvZpH94VSNv7pd4vfyPgh4E86aXujrdEMJXfZRphZh2evwiZOX8Lm8fJ2U78XS4v2aewsSoebdlC2py87pCQks6qw3u2RZmN5XDedQzuYVFSvsuxKdeh9mrn7yCSvph96NrlwqrIoWtW0feadFC46ZFH5oGJOWRLwj9Jr1hcrR9SPFnvapscXN47+wbLsCzSbU7p90L04Jn0ZMdHH5XEv4zllSWD/wzJ6+Po/PvYu9n/9/04ziz9NMzSrJAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgWfwFLyzCJlWZyEQAAAABJRU5ErkJggg==',
    price: {
      specialPrice: true,
      oldPrice: '$20.00',
      currentPrice: '$18.00'
    },
    rating: '5'
  },
  {
    id: 8,
    title: 'Popular Item',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAclBMVEXMzMwAAADR0dHS0tLV1dW3t7elpaWIiIjAwMCwsLDLy8tbW1t3d3d8fHy/v7/ExMSVlZU6OjoeHh6np6dnZ2ckJCRvb29KSkpVVVWYmJiNjY0XFxcSEhJFRUUrKyuWlpYiIiIzMzNHR0dpaWk+Pj4LCwsebs21AAAE4UlEQVR4nO3Za5eiOBAGYKoSRECIFwSvjHa3//8vbgUEEnBn17M9O8w57/Ohu40YoaxUSjoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/nzs6UeVYP9AO8KT1/+LdxjP4k/MPHmr34wj1ylpxoI4Kr6+img5nCqHWXr9yHbq7XcIs3CYJZZZqiIK+2k4WKyqa3rK35/4l9HkaWJyuhFVn8WdKOrOlAuiQyk/KvPmR8o1LZ4v4bwiSlel/Pzsng33dP60I9GcgjJQt9KeWE5lqCWftTlQ1p4pVxTZFNcL2pq3plcSxy4mOV12Wsk8fKJNM8Yh7WN5L52UVM4oKD21atMkWXZnp6+0bJ7J6NiOqZjSd86dFxR1MVEpdYtRLehk/+Tb5Zl3uuxDNyfL9jwdHLdDCVX6OaQzCscv/AlD5bK7WKaymyXQm0pCy+shELzdzC9RVLqdjBkq2lOP+2glXpL7O8h0zk0ty6OPSdQfoQ5X+Zu/6mGnO70V7P9HSD8mF5Vs7UrxoqWqu7MbrfPhgVqPL0rWXOjGpOjzRN3txElXr6xpmv526nCbnpJpkoLrajh1ztoa00ik5Hav0scmqRx26algiElJ3cFqZwflebeGbA9zWzzxizThHR25+Tid1Di6OW7O5+d1qvWk+iaPgw6GmATJZd+Ub9Yx2WdkTebD0ZKAM4uJTml6Rrog+ytxs1ritHMeLS9tpqgjpaOYyj5j9+3Q6U9qynKl47TtT6SEeIfvv+dSvs3L1ZzTqm1Y1s5zcZM7HTaXs+ywepolEqWmMofOAtHHm+0Mr3lTWGQZuscXl/dan19NepPpCfH10QyGo5i4jyQosnyklkzalvBZQJ2Y8GLz+MqKmjbNkCq9mJSPecUkedFG6q7b+lmeNJlSn6Yh0ffn/uTERLrhXEsfK4snDeaeJ7Ky8/GY5P6qvVDz9/WkGUnkW4wOfJJ4z+1p2Hc2W/OMnG6qD0dzrifebvscGrp4f99ZjHsrCR7Vo6+GdsdqwyT9SRtD25QNPVtE8eiTUIdZ7Ts8Xg/N0Ec/dD54/YmfUlJeC6kpS28CQ1UYt450kp8mUFcv7hJnCa/bn+xn1Z+ogkYjEpKr04jfnGPT2rt625doNtuLF5QdjRyZa7el44c8Mm4CGqf1nwGmT/8jkj7zw3l67S4Xv1tV7Y4ju8/WXT5J2FvQOg9DE/DdrcNsizp/Dd/7pBeMv+t6vgEfne94lu023KJphofq5J26XThtr2HOfqb0k3f1RKVnpyo1O7oU2b5e872e1dI5+BVfCqC/M8sm8rzpyIau7qc9tGp2+Uz2LqvbdyQMWRdZDjbtvZpH94VSNv7pd4vfyPgh4E86aXujrdEMJXfZRphZh2evwiZOX8Lm8fJ2U78XS4v2aewsSoebdlC2py87pCQks6qw3u2RZmN5XDedQzuYVFSvsuxKdeh9mrn7yCSvph96NrlwqrIoWtW0feadFC46ZFH5oGJOWRLwj9Jr1hcrR9SPFnvapscXN47+wbLsCzSbU7p90L04Jn0ZMdHH5XEv4zllSWD/wzJ6+Po/PvYu9n/9/04ziz9NMzSrJAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgWfwFLyzCJlWZyEQAAAABJRU5ErkJggg==',
    price: {
      specialPrice: false,
      oldPrice: '',
      currentPrice: '$40.00'
    },
    rating: '4'
  }
]

function App() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [cartItemIds,setItemIds] = useState([])

  const addToCart = item => {
    setCartItems([...cartItems,item])
    setItemIds([...cartItemIds,item.id])
  }

  const deleteCartItem = (item) => { 
    console.log(item);
    setCartItems((oldCartItems) => {
      const result = oldCartItems.filter((d) => d.id!==item.id)
      console.log(result);
      return result;
    })
    setItemIds((oldIds)=>{
      const result = oldIds.filter((d) => d!==item.id)
      console.log(result);
      return result;
    })
  }
  return (
   <div>
      <Header cartItems={cartItems} onCartClick={() => setShowCart(true)}></Header>
      <Header title="Shopping zone" desc="Welcome to the shopping zone!"/>
      <Modal title='Cart' showFooter open={showCart} onClose={() => setShowCart(false)}>
        {
          cartItems.length ? (
            <div>
              <h4>List of Products</h4>
              <ul>
                {
                  cartItems.map((d, index) => {
                    return <li key={index} type="none">
                      { <CartItem
                        id={d.id}
                        title={d.title}
                        image={d.image}
                        deleteCartItem={deleteCartItem}
                      /> }
                      <hr/>
                      </li>
                  })
                }
              </ul>
            </div>
          ) : (
            <div className='text-center'>
              <p className='text-dark-100'>Your cart is empty! Start shopping...</p>
            </div>
          )
        }
      </Modal>
      <Products title='products' data={products} onAdd={addToCart} cartItemsIds={cartItemIds} />
      <Header title="Copyright" desc="Shopping zone 2022"/>
   </div>
  );
}

export default App;
