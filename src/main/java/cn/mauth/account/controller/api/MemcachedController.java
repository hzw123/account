package cn.mauth.account.controller.api;

import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/settings/memcached")
public class MemcachedController {

    @DeleteMapping("/")
    @ApiOperation(value = "删除某账套所有缓存",notes = "删除某账套所有缓存")
    public String delete(String accessToken,Long accountId){

        return null;
    }
}
